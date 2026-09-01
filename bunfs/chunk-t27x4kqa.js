// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J } from "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { t_ } from "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-ps6pc7xd.js";
import { qi } from "/$bunfs/root/chunk-s28wf80n.js";
import "/$bunfs/root/chunk-3bbym8ct.js";
import "/$bunfs/root/chunk-4fwj3vnx.js";
import "/$bunfs/root/chunk-cf8qhmdc.js";
import "/$bunfs/root/chunk-0pgyw7te.js";
import "/$bunfs/root/chunk-r53tkxrh.js";
import "/$bunfs/root/chunk-ca80fke8.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
import { spawn as R } from "child_process";
import { homedir as m } from "os";
import { join as v } from "path";
var V = v(m(), ".cache", "coder-audio", "port"),
  M = v(m(), ".cache", "coder-audio", "token");
class g {
  audioNapi = null;
  audioNapiPromise = null;
  arecordProbe = null;
  linuxAlsaCardsProbe = null;
  activeRecorder = null;
  activeForwardedSocket = null;
  forwardedStartGeneration = 0;
  nativeRecordingActive = false;
}
var l = new J(() => new g());
var w = { started: true };
var h = { started: false, superseded: false, hint: null, expected: false };
function f(e) {
  return (
    (e.audioNapiPromise ??= (async () => {
      let o = Date.now(),
        r = await import("/$bunfs/root/chunk-x95v8bhd.js");
      return (
        r.isNativeAudioAvailable(), (e.audioNapi = r), n(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), r
      );
    })()),
    e.audioNapiPromise
  );
}
var k = 16000,
  x = 1,
  E = "2.0",
  S = "3%";
async function u(e) {
  return (await $e(e, ["--version"], { timeout: 3000, useCwd: false })).code === 0;
}
async function b() {
  if (await u("brew")) return { cmd: "brew", args: ["install", "sox"], displayCommand: "brew install sox" };
  return null;
}
async function ce(e) {
  let o = l.of(e);
  if ((await f(o)).isNativeAudioAvailable()) return { available: true, missing: [], installCommand: null };
  let s = [];
  if (!(await u("sox"))) s.push("sox (rec command)");
  let t = s.length > 0 ? await b() : null;
  return { available: s.length === 0, missing: s, installCommand: t?.displayCommand ?? null };
}
async function le(e) {
  if (!(await f(l.of(e))).isNativeAudioAvailable()) return true;
  if (
    (
      await y(
        e,
        (s) => {},
        () => {},
        { silenceDetection: false },
      )
    ).started
  )
    return C(e), true;
  return false;
}
async function ue(e, o = {}) {
  if (t_() || a.CLAUDE_CODE_REMOTE)
    return {
      available: false,
      reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.`,
    };
  let r = l.of(e);
  if ((await f(r)).isNativeAudioAvailable()) return { available: true, reason: null };
  let t =
      `Voice mode could not find a working audio recorder in WSL.

` +
      `WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

` +
      "If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.",
    d = await u("sox");
  if (d && (await u("rec"))) return { available: true, reason: null };
  if (D() === "wsl") return { available: false, reason: t };
  if (!d) {
    let i = await b();
    return {
      available: false,
      reason: i
        ? `Voice mode requires SoX for audio recording. Install it with: ${i.displayCommand}`
        : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox`,
    };
  }
  return {
    available: false,
    reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.`,
  };
}
async function y(e, o, r, s) {
  n("[voice] startRecording called, platform=darwin");
  let t = l.of(e),
    d = await f(t),
    i = d.isNativeAudioAvailable() && true,
    c = s?.silenceDetection !== false;
  if (i) {
    if (t.nativeRecordingActive || d.isNativeRecordingActive()) d.stopNativeRecording(), (t.nativeRecordingActive = false);
    if (
      d.startNativeRecording(
        (p) => {
          o(p);
        },
        () => {
          if (c) (t.nativeRecordingActive = false), r();
        },
      )
    )
      return (t.nativeRecordingActive = true), w;
  }
  return P(t, o, r, s) ? w : h;
}
function P(e, o, r, s) {
  let t = s?.silenceDetection !== false,
    d = ["-q", "--buffer", "1024", "-t", "raw", "-r", String(k), "-e", "signed", "-b", "16", "-c", String(x), "-"];
  if (t) d.push("silence", "1", "0.1", S, "1", E, S);
  let i = R("rec", d, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, ...qi("helper") });
  return (
    (e.activeRecorder = i),
    i.stdout?.on("data", (c) => {
      o(c);
    }),
    i.stderr?.on("data", () => {}),
    i.on("close", () => {
      (e.activeRecorder = null), r();
    }),
    i.on("error", (c) => {
      n(`[voice] SoX rec spawn failed: ${c instanceof Error ? c.message : String(c)}`, { level: "error" }),
        (e.activeRecorder = null),
        r();
    }),
    true
  );
}
function C(e) {
  let o = l.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), (o.nativeRecordingActive = false);
    return;
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), (o.activeRecorder = null);
}
export {
  ue as checkRecordingAvailability,
  ce as checkVoiceDependencies,
  le as requestMicrophonePermission,
  y as startRecording,
  C as stopRecording,
};
