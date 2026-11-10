import { esc, frame, PAD, W } from "./frame.js";
import { type ThemeId } from "../theme.js";
import { work } from "../content.js";

// One card per case study so each can link to its page on frjr17.com.
// Gloock's "+" is tiny, so it is set in the sans face.
export function workCard(theme: ThemeId, i: number) {
  const w = work[i];
  const n = String(i + 1).padStart(2, "0");
  return frame({
    theme, h: 184, eyebrow: `05 / work() — case ${n}`, title: `Case study: ${w.title}`,
    faces: ["display", "sans"],
    css: `.case{font:400 30px "Gloock", Georgia, serif;letter-spacing:-.01em}`,
    body: `
<text class="mono" x="${W - PAD}" y="${PAD + 12}" text-anchor="end">read case()</text>
<text class="case display" x="${PAD}" y="${PAD + 70}">${esc(w.title).replace(/\+/g, `<tspan style="font-family:&quot;Schibsted Grotesk&quot;">+</tspan>`)}</text>
<text class="body muted" x="${PAD}" y="${PAD + 102}">${esc(w.client)}</text>
<text class="mono" x="${PAD}" y="${PAD + 128}">${esc(w.stack.join(" · ").toLowerCase())}</text>`,
  });
}
