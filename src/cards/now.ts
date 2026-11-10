import { esc, frame, wrap, PAD, W } from "./frame.js";
import { palette, type ThemeId } from "../theme.js";
import { intro, now } from "../content.js";

// Intro paragraph, then the current role. The org name is the amber thing.
export function nowCard(theme: ThemeId) {
  const c = palette(theme);
  const lh = 27, y0 = PAD + 52;
  const para = wrap(intro, W - PAD * 2, 8.4)
    .map((l, i) => `<text class="body" x="${PAD}" y="${y0 + i * lh}">${esc(l)}</text>`).join("");
  const ry = y0 + (wrap(intro, W - PAD * 2, 8.4).length - 1) * lh + 40;
  const text = wrap(now.text, W - PAD * 2, 8.4);
  const h = ry + 58 + (text.length - 1) * lh + PAD - 4;
  return frame({
    theme, h, eyebrow: "04 / now()", title: `Now: ${now.org}, ${now.role}`,
    faces: ["sans", "sansBold"],
    body: `${para}
<line x1="${PAD}" y1="${ry - 0.5}" x2="${W - PAD}" y2="${ry - 0.5}" stroke="${c.line}"/>
<text class="label" x="${PAD}" y="${ry + 30}" style="fill:${c["amber-text"]}">${esc(now.org)}</text>
<text class="mono" x="${W - PAD}" y="${ry + 30}" text-anchor="end">${esc(now.role.toLowerCase())}</text>
${text.map((l, i) => `<text class="body muted" x="${PAD}" y="${ry + 58 + i * lh}">${esc(l)}</text>`).join("")}`,
  });
}
