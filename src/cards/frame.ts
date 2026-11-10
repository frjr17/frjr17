import { palette, type ThemeId } from "../theme.js";
import { fontCss, STACK, type Face } from "../fonts.js";

export const W = 840;
const CARD_W = W;   // GitHub's README column is ~830px; scaled down on mobile via width="100%"
export const PAD = 32;  // space-3

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Greedy word wrap by an average glyph width (SVG text has no wrapping). */
export function wrap(text: string, maxW: number, avg: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (next.length * avg > maxW && line) { lines.push(line); line = word; } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

export const fmt = (n: number) => (n >= 10000 ? `${(n / 1000).toFixed(1)}k` : n.toLocaleString("en-US"));

/** Perpetual motion: small ink "packets" travel the card's hairline, like the site's scene packets. */
function packets(w: number, h: number, c: Record<string, string>) {
  const perim = 2 * (w + h - 2);
  const dur = (perim / 70).toFixed(1); // ~70px/s regardless of card size
  const path = `M.5 .5H${w - 0.5}V${h - 0.5}H.5Z`;
  return {
    css: `.pk{offset-path:path("${path}");offset-rotate:0deg;transform-box:view-box;transform-origin:0 0;animation:travel ${dur}s linear infinite}
.pk2{animation-delay:-${(+dur / 2).toFixed(1)}s}
@keyframes travel{from{offset-distance:0%}to{offset-distance:100%}}`,
    svg: `<rect class="pk" x="-2" y="-2" width="4" height="4" fill="${c.ink}"/><rect class="pk pk2" x="-1.5" y="-1.5" width="3" height="3" fill="${c["ink-muted"]}"/>`,
  };
}

/** Card shell: surface-100 ground, square corners, line hairline, lowercase mono eyebrow. */
export function frame(o: {
  theme: ThemeId; h: number; eyebrow: string; title: string; faces: Face[]; body: string; css?: string; w?: number;
}) {
  const c = palette(o.theme);
  const W = o.w ?? CARD_W;
  const pk = packets(W, o.h, c);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${o.h}" viewBox="0 0 ${W} ${o.h}" role="img" aria-labelledby="t">
<title id="t">${esc(o.title)}</title>
<style>${fontCss(["mono", ...o.faces])}
.eyebrow{font:300 12px ${STACK.mono};letter-spacing:.06em;fill:${c["ink-muted"]}}
.display{font:400 44px ${STACK.display};letter-spacing:-.01em;fill:${c.ink}}
.accent{font:italic 400 44px ${STACK.sans};letter-spacing:-.04em;fill:${c.ink}}
.body{font:400 16px ${STACK.sans};fill:${c.ink}}
.muted{fill:${c["ink-muted"]}}
.label{font:600 14px ${STACK.sans};fill:${c.ink}}
.mono{font:300 12px ${STACK.mono};letter-spacing:.06em;fill:${c["ink-muted"]}}
${o.css ?? ""}
${pk.css}
@media (prefers-reduced-motion:reduce){*{animation:none!important}.pk{display:none}}
</style>
<rect x=".5" y=".5" width="${W - 1}" height="${o.h - 1}" fill="${c["surface-100"]}" stroke="${c.line}"/>
<text class="eyebrow" x="${PAD}" y="${PAD + 12}">${esc(o.eyebrow)}</text>
${o.body}
${pk.svg}
</svg>`;
}
