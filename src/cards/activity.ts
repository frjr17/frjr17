import { frame, fmt, PAD, W } from "./frame.js";
import { palette, type ThemeId } from "../theme.js";
import type { Profile } from "../github.js";

// Weekly contributions as a quiet bar field; the busiest week is the amber thing.
export function activity(theme: ThemeId, p: Profile) {
  const c = palette(theme);
  const weeks = p.weeks.slice(-52);
  const max = Math.max(1, ...weeks);
  const peak = weeks.indexOf(max);
  const top = PAD + 40, hMax = 72, base = top + hMax;
  const gap = 4, bw = (W - PAD * 2 - gap * (weeks.length - 1)) / weeks.length;
  const bars = weeks.map((n, i) => {
    const h = Math.max(2, (n / max) * hMax);
    return `<rect class="bar" style="animation-delay:${i * 12}ms,${(i * 90 - 4680).toFixed(0)}ms" x="${(PAD + i * (bw + gap)).toFixed(1)}" y="${(base - h).toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" fill="${i === peak ? c.amber : c["ink-muted"]}"${i === peak ? "" : ` fill-opacity=".55"`}/>`;
  }).join("");
  return frame({
    theme, h: base + 56, eyebrow: "03 / activity()", title: `Weekly contributions for ${p.login}`,
    faces: ["sans"],
    css: `.bar{transform-box:fill-box;transform-origin:bottom;animation:up .6s cubic-bezier(.2,.7,.2,1) both,wave 4.68s ease-in-out infinite}@keyframes wave{0%,100%{opacity:1}50%{opacity:.55}}@keyframes up{from{transform:scaleY(0)}to{transform:none}}`,
    body: `${bars}
<line x1="${PAD}" y1="${base + 0.5}" x2="${W - PAD}" y2="${base + 0.5}" stroke="${c.line}"/>
<text class="body muted" x="${PAD}" y="${base + 30}">${fmt(p.contributionsYear)} contributions in the last 52 weeks</text>
<text class="mono" x="${W - PAD}" y="${base + 30}" text-anchor="end">peak: ${max}/wk</text>`,
  });
}
