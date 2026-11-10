import { frame, PAD, W } from "./frame.js";
import { wordmark, type ThemeId } from "../theme.js";

// One amber thing in this view: the () of the wordmark.
export function header(theme: ThemeId) {
  const wm = wordmark(theme);
  const wmW = 200, scale = wmW / wm.w, wmH = wm.h * scale;
  const h = 300;
  return frame({
    theme, h, eyebrow: "00 / hello()", title: "adrien() — Hernán Valencia, full-stack software engineer",
    faces: ["display", "sansItalic", "sans"],
    css: `.r{animation:rise .8s cubic-bezier(.2,.7,.2,1) both}.d2{animation-delay:.15s}.d3{animation-delay:.3s}
.caret{animation:blink 1.1s steps(1) infinite}@keyframes blink{50%{opacity:0}}
@keyframes rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`,
    body: `
<g transform="translate(${PAD - 6} ${PAD + 28}) scale(${scale})"><g class="r">${wm.inner}</g></g>
<text class="r d2" x="${PAD}" y="${PAD + 28 + wmH + 52}"><tspan class="display">From architecture to </tspan><tspan class="accent">production.</tspan><tspan class="caret display">_</tspan></text>
<text class="r d3 body muted" x="${PAD}" y="${h - PAD - 26}">Hernán Valencia — full-stack software engineer, DevOps &amp; cloud infrastructure.</text>
<text class="r d3 body muted" x="${PAD}" y="${h - PAD}">React · Next.js · Node.js · AWS EKS · Jenkins · Argo CD — Panama City</text>
<text class="mono" x="${W - PAD}" y="${PAD + 12}" text-anchor="end">frjr17.com</text>`,
  });
}
