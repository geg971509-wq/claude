#!/usr/bin/env python3
import argparse, collections, json, math, re, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CHUNK_RE = re.compile(r'^chunk-[a-z0-9]+\.js$')

STOP = set('''call get set run main default create update delete list read write use make build init start stop open close handle process format parse normalize validate resolve ensure load save find send receive add remove map filter reduce count has is can should will do on off to from as for of and or the a an with without by in out up down value values data item items result results state config options option type types event events message messages request response function functions tool tools runtime helper util utils this that these those true false null undefined error errors code name names string strings number numbers object objects array arrays promise async await return class var let const new anthropic claude user system model api utf utf8 mjs cjs js jsx ts tsx txt zst gz src dist node bun bunfs root include includes included excluding replace match test regexp index length push slice join split trim stringified digit digits one two three four five six seven eight nine zero max min equal greater less generic unknown safe'''.split())

CATEGORY_TERMS = {
 'aws': {'aws','smithy','bedrock','credential','credentials','sigv','sts','region','s3'},
 'network': {'http','https','proxy','axios','socket','tls','mtls','certificate','url','dns','fetch'},
 'filesystem': {'file','files','path','paths','folder','directory','filesystem','symlink','stat','chmod','rename','unlink','mkdir','atomic'},
 'git': {'git','repository','repo','commit','branch','worktree','diff','remote'},
 'github': {'github','pull','issue','issues'},
 'auth': {'oauth','oidc','token','keychain','login','auth','authentication','authorization','consent'},
 'mcp': {'mcp','connector','connectors','server','servers'},
 'hooks': {'hook','hooks','callback','callbacks'},
 'session': {'session','sessions','transcript','conversation','resume','teleport'},
 'storage': {'storage','store','stores','lease','cache'},
 'telemetry': {'telemetry','metric','metrics','analytics','statsig','sentry'},
 'terminal': {'terminal','ansi','tty','color','ink','width','cursor'},
 'ui': {'dialog','component','render','view','screen','subtitle','notice','prompt','menu','spinner'},
 'text': {'text','unicode','truncate','truncation','sanitize','sanitization','markdown'},
 'process': {'exec','spawn','subprocess','signal','pid','stdio','command'},
 'tools': {'permission','permissions','bash','glob','grep','edit','cron'},
 'config': {'settings','setting','preference','preferences','environment','env','schema'},
 'models': {'provider','bedrock','vertex'},
 'plugins': {'plugin','plugins','marketplace'},
 'agents': {'agent','agents','fleet','subagent'},
 'remote-control': {'remote','control','device','bind','binding'},
 'native': {'native','swift','clipboard','microphone','audio','image'},
 'i18n': {'intl','locale','locales','language','languages'},
 'validation': {'zod','schema','validation'},
 'serialization': {'json','jsonl','jsonc','serialize','serialization','yaml'},
 'crypto': {'crypto','sha','hash','uuid'},
 'startup': {'startup','profile','checkpoint','bootstrap'},
 'diagnostics': {'diagnostic','diagnostics','debug','log','logging'},
}
ROLE_WORDS = {'parser','renderer','formatter','writer','reader','provider','adapter','binding','handler','registry','client','server','store','policy','schema','dialog','component','resolver','validator','serializer','scheduler','queue','tracker','detector','normalizer','sanitizer','logger','reporter','coordinator','orchestrator','bridge','manager','transport','protocol'}

def split_ident(s):
    s = s.split(' as ')[-1]
    s = re.sub(r'[_./:-]+', ' ', s)
    return [w.lower() for w in re.findall(r'[A-Z]+(?=[A-Z][a-z]|\b)|[A-Z]?[a-z]+|\d+', s)]

def good(w):
    if len(w) < 3 or len(w) > 30 or w in STOP or any(c.isdigit() for c in w): return False
    if re.fullmatch(r'[a-f]{6,}', w): return False
    return True

def scan(path):
    src = path.read_text('utf-8', errors='ignore')
    imports = re.findall(r'import\s+(?:[^;\n]*?\s+from\s+)?["\']([^"\']+)["\']', src)
    exports = []
    i = src.rfind('export {')
    if i >= 0:
        j = src.find('}', i)
        if j >= 0: exports = [x.strip() for x in src[i+8:j].replace('\\n',' ').split(',') if x.strip()]
    alias = []
    for e in exports:
        name = e.split(' as ')[-1].strip()
        if re.fullmatch(r'[A-Za-z_$]{1,3}\d*[A-Za-z_$]?', name): continue
        alias += [w for w in split_ident(name) if good(w)]
    word_counts = collections.Counter()
    body = src
    pos = body.find('// Version:')
    if pos >= 0:
        nl = body.find('\\n', pos)
        if nl >= 0: body = body[nl+1:]
    for s in re.findall(r'["\']([^"\'\n]{3,160})["\']', body):
        if s.startswith('/$bunfs/root/chunk-'): continue
        for tok in re.findall(r'[A-Za-z][A-Za-z0-9_.:/-]{2,}', s):
            for part in re.split(r'[._:/-]+', tok):
                for w in split_ident(part):
                    if good(w): word_counts[w] += 1
    return {'src':src, 'imports':imports, 'exports':exports, 'alias':alias, 'words':word_counts}

def category(words):
    best = ('runtime', 0)
    for cat, terms in CATEGORY_TERMS.items():
        score = sum(3 for w in words[:15] if w in terms)
        if score > best[1]: best = (cat, score)
    return best[0]

def role(info, words):
    for w in words:
        if w in ROLE_WORDS: return w
    src = info['src']
    if 'promisify' in src: return 'promisified-operation'
    if 'role="button"' in src or 'React.createElement' in src or 'jsx' in src: return 'component'
    if re.search(r'\bclass\s+', src): return 'implementation'
    if len(info['exports']) >= 6: return 'utilities'
    if len(info['exports']) == 1: return 'handler'
    if len(src) < 1200: return 'primitives'
    return 'runtime'

def is_opaque(path):
    return any(CHUNK_RE.match(part) for part in Path(path).parts)

def git_mv(src, dst):
    (ROOT / dst).parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(['git','mv',src,dst], cwd=ROOT, check=True)

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--audit')
    ap.add_argument('--apply', action='store_true')
    args=ap.parse_args()
    pathmap=json.loads((ROOT/'pathmap.json').read_text())
    semantic=json.loads((ROOT/'semantic-paths.json').read_text())
    audit=json.loads(Path(args.audit).read_text()) if args.audit else {}
    physical = sorted(p for p in (ROOT/'bunfs').rglob('chunk-*.js') if p.is_file())
    infos={p.name:scan(p) for p in physical}
    names=set(infos)
    deps={}; rev=collections.defaultdict(list)
    for f,info in infos.items():
        ds=[]
        for imp in info['imports']:
            m=re.search(r'(chunk-[a-z0-9]+\.js)',imp)
            if m and m.group(1) in names: ds.append(m.group(1))
        deps[f]=ds
        for d in ds: rev[d].append(f)
    df=collections.Counter()
    for f,i in infos.items(): df.update(set(i['alias']) | set(i['words']))
    n=max(1,len(infos)); idf={w:math.log((n+1)/(c+1))+1 for w,c in df.items()}
    ranked={}
    for f,i in infos.items():
        s=collections.Counter()
        for w in i['alias']: s[w]+=8*idf.get(w,1)
        for w,c in i['words'].items(): s[w]+=min(c,3)*1.2*idf.get(w,1)
        ranked[f]=[w for w,_ in s.most_common(20)]
    borrowed={}
    for f in infos:
        s=collections.Counter(); callers=rev[f]
        if callers and len(callers)<=8:
            for c in callers:
                for w in ranked[c][:5]: s[w]+=2/len(callers)
        for d in deps[f]:
            for w in ranked[d][:3]: s[w]+=.25
        borrowed[f]=[w for w,_ in s.most_common(12)]
    reserved=set(semantic.values())
    for v,t in audit.items():
        if v in semantic: reserved.discard(semantic[v])
        reserved.add(t)
    generated={}; used=set(reserved)
    for p in physical:
        f=p.name; own=ranked[f]; borrow=borrowed[f]; context=own if len(own)>=2 else own+borrow
        cat=category(context); alias=[]
        for w in infos[f]['alias']:
            if w not in alias: alias.append(w)
        pool=[]
        for seq in (alias, own, borrow):
            for w in seq:
                if good(w) and w not in pool and w not in cat.replace('-',' '): pool.append(w)
        if not pool:
            src=infos[f]['src']; pool=[b.replace('_','-') for b in ['child_process','crypto','path','fs','stream','http','https','os','util','events'] if b in src] or ['shared']
        concepts=pool[:3]; r=role(infos[f],context)
        if r not in concepts and not any(r in x for x in concepts): concepts.append(r)
        base='-'.join(concepts); candidates=[base]; cur=base
        for w in pool[3:10]+borrow:
            if w in cur.split('-'): continue
            cur += '-'+w; candidates.append(cur)
        src=infos[f]['src']
        for q in ['async' if 'async ' in src else '', 'promise' if 'Promise' in src else '', 'constants' if re.search(r'\b(?:const|var)\b',src) else '', 'facade' if deps[f] and len(src)<1800 else '', 'implementation']:
            if q and q not in cur: cur += '-'+q; candidates.append(cur)
        dest=None
        for c in candidates:
            d=f'bunfs/modules/{cat}/{c}.js'
            if d not in used: dest=d; break
        if not dest:
            for q in ['facade','adapter','bridge','primitives','implementation','shared-state','shared-utilities']:
                d=f'bunfs/modules/{cat}/{base}-{q}.js'
                if d not in used: dest=d; break
        if not dest: raise RuntimeError(f'cannot create unique semantic path for {f}')
        used.add(dest); generated['bunfs/'+f]=dest
    desired=dict(semantic)
    for v, extracted in pathmap.items():
        if v in audit: desired[v]=audit[v]
        elif v in semantic and not is_opaque(semantic[v]): desired[v]=semantic[v]
        elif Path(extracted).name.startswith('chunk-') and extracted in generated: desired[v]=generated[extracted]
    moves=[]
    for v,target in desired.items():
        if v not in pathmap: continue
        source=semantic.get(v, pathmap[v])
        if source != target and (ROOT/source).is_file(): moves.append((source,target,v))
    print(json.dumps({'physical_chunks':len(physical),'moves':len(moves),'semantic_paths_after':len(desired)},indent=2))
    if not args.apply: return
    vals=list(desired.values())
    if len(vals)!=len(set(vals)): raise RuntimeError('duplicate semantic destinations')
    for source,target,v in moves:
        if (ROOT/target).exists(): raise RuntimeError(f'target exists: {target}')
        git_mv(source,target)
    (ROOT/'semantic-paths.json').write_text(json.dumps(desired,indent=2,ensure_ascii=False)+'\n')
    remaining=list((ROOT/'bunfs').rglob('chunk-*.js'))
    if remaining: raise RuntimeError(f'{len(remaining)} physical chunk files remain')
    print(f'renamed all physical chunk files; 0 remain; semantic paths={len(desired)}')

if __name__=='__main__': main()
