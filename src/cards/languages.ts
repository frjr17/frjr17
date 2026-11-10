import { esc, frame, PAD, W } from "./frame.js";
import { palette, type ThemeId } from "../theme.js";
import type { Profile } from "../github.js";

// Languages are told apart by lightness, not hue. Amber marks only the top one.
export function languages(theme: ThemeId, p: Profile) {
  const c = palette(theme);
  const barW = W - PAD * 2, gap = 3, y = PAD + 40;
  const steps = [1, 0.78, 0.6, 0.46, 0.36, 0.28, 0.22];
  let x = PAD;
  const segs = p.languages.map((l, i) => {
    const w = Math.max(2, l.share * (barW - gap * (p.languages.length - 1)));
    const fill = i === 0 ? c.amber : c.ink;
    const s = `<rect class="seg" style="animation-delay:${i * 60}ms" x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="12" fill="${fill}" fill-opacity="${i === 0 ? 1 : steps[i]}"/>`;
    x += w + gap;
    return s;
  }).join("");
  const cols = 4, colW = barW / cols;
  const legend = p.languages.map((l, i) => {
    const lx = PAD + (i % cols) * colW, ly = y + 52 + Math.floor(i / cols) * 34;
    const fill = i === 0 ? c.amber : c.ink;
    return `<rect x="${lx}" y="${ly - 10}" width="10" height="10" fill="${fill}" fill-opacity="${i === 0 ? 1 : steps[i]}"/>
<text class="label" x="${lx + 18}" y="${ly}">${esc(l.name)}</text>
<text class="mono" x="${lx + colW - 24}" y="${ly}" text-anchor="end">${(l.share * 100).toFixed(1)}%</text>`;
  }).join("");
  const rows = Math.ceil(p.languages.length / cols);
  return frame({
    theme, h: y + 52 + (rows - 1) * 34 + PAD, eyebrow: "02 / languages()", title: `Top languages for ${p.login}`,
    faces: ["sansBold"],
    css: `.seg{transform-box:fill-box;transform-origin:left;animation:grow .7s cubic-bezier(.2,.7,.2,1) both}@keyframes grow{from{transform:scaleX(0)}to{transform:none}}`,
    body: segs + legend,
  });
}
