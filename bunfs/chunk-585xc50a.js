// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{hf}from"/$bunfs/root/chunk-f9h0bg01.js";import"/$bunfs/root/chunk-qq1mdtb5.js";import"/$bunfs/root/chunk-tx16jn0x.js";import{s}from"/$bunfs/root/chunk-r53tkxrh.js";import"/$bunfs/root/chunk-4xj01xwv.js";import"/$bunfs/root/chunk-ca80fke8.js";import{wt,Tt}from"/$bunfs/root/chunk-8tgj5dp2.js";import"/$bunfs/root/chunk-gcks6mn0.js";import"/$bunfs/root/chunk-bzx56g36.js";import"/$bunfs/root/chunk-eqdctte5.js";import{a}from"/$bunfs/root/chunk-fec4384a.js";import"/$bunfs/root/chunk-qm65zb83.js";import"/$bunfs/root/chunk-vfy57cpd.js";import"/$bunfs/root/chunk-ypdw393e.js";import"/$bunfs/root/chunk-fv016jr6.js";import"/$bunfs/root/chunk-qk7r0t2g.js";import"/$bunfs/root/chunk-4ddxwr9r.js";import"/$bunfs/root/chunk-wkxx62a2.js";import"/$bunfs/root/chunk-ps6pc7xd.js";import"/$bunfs/root/chunk-4fwj3vnx.js";import"/$bunfs/root/chunk-s7e0px8j.js";import"/$bunfs/root/chunk-s28wf80n.js";import"/$bunfs/root/chunk-3bbym8ct.js";import"/$bunfs/root/chunk-cf8qhmdc.js";import"/$bunfs/root/chunk-0pgyw7te.js";import"/$bunfs/root/chunk-2masxyqj.js";import"/$bunfs/root/chunk-rgw52f13.js";import"/$bunfs/root/chunk-2rx5nghb.js";import"/$bunfs/root/chunk-f5hrzy3k.js";import"/$bunfs/root/chunk-nqmqabr8.js";import"/$bunfs/root/chunk-z0z1xzkg.js";import"/$bunfs/root/chunk-c47snwm2.js";import"/$bunfs/root/chunk-jpf4kat5.js";import"/$bunfs/root/chunk-s4vc7est.js";import"/$bunfs/root/chunk-hyh5wcm1.js";import"/$bunfs/root/chunk-ntyhd04p.js";import"/$bunfs/root/chunk-6k63g5t6.js";import"/$bunfs/root/chunk-q14dgq5g.js";import"/$bunfs/root/chunk-8qsdea2c.js";import"/$bunfs/root/chunk-988p40e0.js";import"/$bunfs/root/chunk-0spqrdaj.js";import"/$bunfs/root/chunk-5rt2mvvk.js";import"/$bunfs/root/chunk-1yr12dqr.js";import"/$bunfs/root/chunk-2mmw62jx.js";import"/$bunfs/root/chunk-z2bvp3sv.js";import"/$bunfs/root/chunk-keb644xg.js";import"/$bunfs/root/chunk-bj904w9w.js";import"/$bunfs/root/chunk-18bck2pp.js";import"/$bunfs/root/chunk-dwwpyy7b.js";import"/$bunfs/root/chunk-jck8t8fq.js";import"/$bunfs/root/chunk-a48rnvhj.js";import"/$bunfs/root/chunk-492vgtnr.js";import"/$bunfs/root/chunk-qk6zade1.js";import"/$bunfs/root/chunk-0g6cj4h1.js";import"/$bunfs/root/chunk-amem41jf.js";import"/$bunfs/root/chunk-e7rq8w09.js";import{pr}from"/$bunfs/root/chunk-82w4mtvq.js";import"/$bunfs/root/chunk-386w1sy8.js";import"/$bunfs/root/chunk-ax6dy60b.js";import"/$bunfs/root/chunk-qcx34e4j.js";import"/$bunfs/root/chunk-psdymar6.js";import"/$bunfs/root/chunk-0r9wzh7g.js";import"/$bunfs/root/chunk-sxxp6vcr.js";import"/$bunfs/root/chunk-rf51999f.js";import"/$bunfs/root/chunk-v7yhn7cf.js";import"/$bunfs/root/chunk-kxyny47c.js";import"/$bunfs/root/chunk-ghara6r1.js";import"/$bunfs/root/chunk-4r03fm98.js";import"/$bunfs/root/chunk-r3qa2s4k.js";import"/$bunfs/root/chunk-k4a21mkt.js";import"/$bunfs/root/chunk-4rh74qms.js";import"/$bunfs/root/chunk-1evht33z.js";import"/$bunfs/root/chunk-fbp3w46j.js";import"/$bunfs/root/chunk-gtv2468w.js";import"/$bunfs/root/chunk-s4smmnta.js";import"/$bunfs/root/chunk-z9ex1x2t.js";import"/$bunfs/root/chunk-gkfy5ggn.js";import"/$bunfs/root/chunk-4t3vsqt7.js";import"/$bunfs/root/chunk-ejdwrhgv.js";import"/$bunfs/root/chunk-zkvj62rn.js";import"/$bunfs/root/chunk-tzhtxm67.js";import"/$bunfs/root/chunk-mznd09c6.js";import"/$bunfs/root/chunk-167jjb66.js";import"/$bunfs/root/chunk-97wwdfyx.js";import"/$bunfs/root/chunk-avrc9gay.js";import"/$bunfs/root/chunk-zk5v8tw6.js";import{Xun}from"/$bunfs/root/chunk-kdtcyk0z.js";import{Mt}from"/$bunfs/root/chunk-fs02hzwy.js";import{Yi}from"/$bunfs/root/chunk-98tgyb1d.js";import"/$bunfs/root/chunk-gvnqpbsf.js";import"/$bunfs/root/chunk-5c5qq1s7.js";import{jX}from"/$bunfs/root/chunk-trte0v0g.js";import{lm,$S,UX,cC}from"/$bunfs/root/chunk-pbd9yggs.js";import"/$bunfs/root/chunk-1v3848mh.js";import{Zr}from"/$bunfs/root/chunk-rntp2fy5.js";import"/$bunfs/root/chunk-2n1hsggr.js";import"/$bunfs/root/chunk-s0xdwab3.js";import"/$bunfs/root/chunk-c76q2y0e.js";import"/$bunfs/root/chunk-cds31m36.js";import"/$bunfs/root/chunk-z15hpjf9.js";import"/$bunfs/root/chunk-1pn2pk9v.js";import"/$bunfs/root/chunk-hebj76vj.js";import"/$bunfs/root/chunk-0mrbtv3q.js";import"/$bunfs/root/chunk-5n1tbe50.js";import"/$bunfs/root/chunk-twwd9fep.js";import"/$bunfs/root/chunk-a2an01ph.js";import"/$bunfs/root/chunk-dck778n3.js";import"/$bunfs/root/chunk-nkjrjh5n.js";import"/$bunfs/root/chunk-c6k0ecxv.js";import"/$bunfs/root/chunk-bp3j8sq3.js";import"/$bunfs/root/chunk-qekzccch.js";import"/$bunfs/root/chunk-s2ac0z44.js";import"/$bunfs/root/chunk-wgz3g40p.js";import"/$bunfs/root/chunk-1mp2j0tx.js";import{wL}from"/$bunfs/root/chunk-0zeq227c.js";import{Kft}from"/$bunfs/root/chunk-0b5b5vvk.js";import{ny,hT}from"/$bunfs/root/chunk-8spbv9dy.js";import{pa,lTe,Tne}from"/$bunfs/root/chunk-h4g4vfcb.js";import"/$bunfs/root/chunk-81defen8.js";import{xk}from"/$bunfs/root/chunk-cyeg83af.js";import{Do}from"/$bunfs/root/chunk-tabr8ghb.js";import"/$bunfs/root/chunk-rr0yj5sq.js";import"/$bunfs/root/chunk-a7wreksn.js";import{ma}from"/$bunfs/root/chunk-4cvqk0nv.js";import"/$bunfs/root/chunk-8sbwe0jk.js";import"/$bunfs/root/chunk-nwb64bac.js";import"/$bunfs/root/chunk-3fwkz19s.js";import"/$bunfs/root/chunk-szz73wxx.js";import"/$bunfs/root/chunk-b40bn863.js";import"/$bunfs/root/chunk-6mgs10s2.js";import"/$bunfs/root/chunk-6s9ybdq1.js";import"/$bunfs/root/chunk-74qqwjhx.js";import"/$bunfs/root/chunk-1hh0bg14.js";import"/$bunfs/root/chunk-052zvbpg.js";import"/$bunfs/root/chunk-werv747a.js";import"/$bunfs/root/chunk-jzh4kg5x.js";import"/$bunfs/root/chunk-7s7jqj2f.js";import"/$bunfs/root/chunk-56sxk8k2.js";import"/$bunfs/root/chunk-a4q326ap.js";var r=import.meta.require("/$bunfs/root/chunk-jemhm57r.js"),b="10m";function y(){return jX()?` Before you stop, send a one-line outcome via ${xk} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`:""}var p=/^\d+[smhd]$/,m=/^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i;function _(e){let o=e[1],t=e[2].toLowerCase();if(t.startsWith("s"))return`${o}s`;if(t.startsWith("h"))return`${o}h`;if(t.startsWith("d"))return`${o}d`;return`${o}m`}var N="| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";function T(){if(!a.CLAUDE_CODE_REMOTE&&!wt()&&pr()&&Tt()&&Mt("allow_remote_sessions")&&Mt(wL)&&hf().length===0)return`
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${Yi} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${lm}. Invoke the \`schedule\` skill directly via the ${Do} tool with \`args\` set to their original input verbatim (e.g. \`${Do}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${lm}, no ${pa}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${lm}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;return""}function I(){if(!a.CLAUDE_CODE_REMOTE&&!wt()&&pr()&&Tt()&&Mt("allow_remote_sessions")&&Mt(wL)){if(hf().length>0)return` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;return` Only if you did NOT show the cloud-offer ${Yi} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`}return""}function E(){return`Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval \u2014 or with no interval, let the model self-pace based on the task.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, the model picks a delay between iterations based on what it's doing.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (dynamic \u2014 model picks delays)
  /loop check the deploy every 20m`}function A(e){let o=`The user wants you to self-pace. Decide what makes the next iteration worth running \u2014 a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${ma} is already running for it: arm one now with \`persistent: true\`. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${pa} deadline. Arm once; on later iterations call ${hT} first and skip this step if a monitor is already running.
3. **Briefly confirm**: that you're self-pacing, whether a ${ma} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${pa} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the task needs another iteration, call ${pa} with:
   - \`delaySeconds\`: with a ${ma} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks more frequent than the task needs are pure overhead). Without a ${ma} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it doesn't need another iteration, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, call ${pa} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 (the ${ma} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${pa} with \`stop: true\` (no other fields) and ${ny} any ${ma} you armed (use ${hT} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`# /loop \u2014 schedule a recurring or self-paced prompt

Parse the input below into \`[interval] <prompt\u2026>\` and schedule it.

## Parsing (in priority order)

1. **Leading token**: if the first whitespace-delimited token matches \`^\\d+[smhd]$\` (e.g. \`5m\`, \`2h\`), that's the interval; the rest is the prompt.
2. **Trailing "every" clause**: otherwise, if the input ends with \`every <N><unit>\` or \`every <N> <unit-word>\` (e.g. \`every 20m\`, \`every 5 minutes\`, \`every 2 hours\`), extract that as the interval and strip it from the prompt. Only match when what follows "every" is a time expression \u2014 \`check every PR\` has no interval.
3. **No interval**: otherwise, the entire input is the prompt and you'll self-pace dynamically (see "Dynamic mode" below).

If the resulting prompt is empty, show usage \`/loop [interval] <prompt>\` and stop.

Examples:
- \`5m /babysit-prs\` \u2192 interval \`5m\`, prompt \`/babysit-prs\` (rule 1)
- \`check the deploy every 20m\` \u2192 interval \`20m\`, prompt \`check the deploy\` (rule 2)
- \`run tests every 5 minutes\` \u2192 interval \`5m\`, prompt \`run tests\` (rule 2)
- \`check the deploy\` \u2192 no interval \u2192 dynamic mode, prompt \`check the deploy\` (rule 3)
- \`check every PR\` \u2192 no interval \u2192 dynamic mode, prompt \`check every PR\` (rule 3 \u2014 "every" not followed by time)
- \`5m\` \u2192 empty prompt \u2192 show usage
${T()}
## Fixed-interval mode (rules 1 and 2)

Convert the interval to a cron expression:

${N}

Then:
1. Call ${lm} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${UX} days, and that the user can cancel sooner with ${$S} (include the job ID).${I()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Dynamic mode (rule 3 \u2014 no interval)

${o}

## Input

${e}`}var f=(e,o,t)=>{let i=e?`## Loop tasks (from ${e.path})`:"## Autonomous-loop instructions (for the immediate execution and every fire)",n;if(e)n=e.content;else r.logAutonomousLoopActivation(),n=r.getAutonomousLoopPreamble();let h=e?"the loop.md tasks":"the autonomous check";if(o){let c=e?r.LOOP_FILE_DYNAMIC_SENTINEL:Tne,k=e?`# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${e.path}\`. Run those tasks now, then self-pace the next iteration via ${pa} \u2014 no cron.`:`# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${pa} \u2014 no cron.`,v=e?`that you're running tasks from \`${e.path}\` in dynamic-pacing mode, that you ran the first tick now`:"that this is the autonomous default in dynamic-pacing mode, that you ran the check now",O=`1. **Run ${h} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${ma} is already running for it: arm one now with \`persistent: true\`. Its events wake this loop immediately \u2014 you do not wait for the ${pa} deadline. Arm once; on later ticks call ${hT} first and skip if a monitor is already running.
3. **Briefly confirm**: ${v}, whether a ${ma} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${pa} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the next check is worth running, call ${pa} with:
   - \`delaySeconds\`: with a ${ma} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${c}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it isn't, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, call ${pa} again with \`${c}\` and the same 1200\u20131800s \`delaySeconds\` (the ${ma} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${pa} with \`stop: true\` (no other fields) and ${ny} any ${ma} you armed (use ${hT} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`${k}

## Action

${O}

${i}

${n}`}let l=e?r.LOOP_FILE_SENTINEL:lTe,u=e?`# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`) and has a loop-tasks file at \`${e.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`:`# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,g=e?"it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix.":"it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",w=e?`what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${e.path}\`, that recurring tasks auto-expire after ${UX} days, and that the user can cancel sooner with ${$S} (include the job ID).`:`what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${UX} days, and that they can cancel sooner with ${$S} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;return`${u}

## Action

1. Convert \`${t}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${lm} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${l}\` \u2014 ${g}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${w}
4. **Then immediately run ${h} now**, following the instructions inlined below. Don't wait for the first cron fire.

${i}

${n}`};function G(){Zr({name:Kft,menuDescription:"Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",aliases:["proactive"],description:"Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",whenToUse:'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',get argumentHint(){return"[interval] [prompt]"},userInvocable:!0,argsMayContainSlashCommands:!0,isEnabled:cC,async getPromptForCommand(e,o){let t=e.trim();if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)s("tengu_loop_command",{has_args:t.length>0,is_interval_only:p.test(t)||m.test(t)});{let i=t.match(m),n=!t,h=p.test(t)||i!==null;if(n||h){let l=i?_(i):t||b,u=await r.readLoopFileAsync(o.storageV5);if(n){if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)Xun();return[{type:"text",text:f(u,!0,l)}]}return[{type:"text",text:f(u,!1,l)}]}}if(!t)return[{type:"text",text:E()}];if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)Xun();return[{type:"text",text:A(t)}]}})}export{G as registerLoopSkill};
