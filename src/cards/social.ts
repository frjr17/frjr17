import { esc } from "./frame.js";
import { palette, type ThemeId } from "../theme.js";
import { fontCss, STACK } from "../fonts.js";
import { socials } from "../content.js";

export const TILE_W = 204, TILE_H = 56;

// Line icons on a 24px grid: stroke only, ink, square caps. The GitHub mark is Octicons' mark-github (MIT).
const ICONS: Record<string, (ink: string) => string> = {
  website: (k) => `<g fill="none" stroke="${k}" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15"/></g>`,
  github: (k) => `<path transform="translate(2 2) scale(1.25)" fill="${k}" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>`,
  linkedin: (k) => `<g fill="none" stroke="${k}" stroke-width="1.5"><rect x="2.75" y="2.75" width="18.5" height="18.5"/></g><g fill="${k}"><rect x="6.5" y="10" width="2.4" height="7.5"/><rect x="6.5" y="6" width="2.4" height="2.4"/><path d="M10.9 10h2.3v1.1c.5-.8 1.4-1.3 2.6-1.3 2 0 2.9 1.2 2.9 3.4v4.3h-2.4v-3.9c0-1.1-.4-1.7-1.3-1.7-1 0-1.7.7-1.7 1.9v3.7h-2.4z"/></g>`,
  email: (k) => `<g fill="none" stroke="${k}" stroke-width="1.5"><rect x="2.75" y="5.25" width="18.5" height="13.5"/><path d="M3 6l9 7 9-7"/></g>`,
};

/** A linkable tile: hairline square frame, icon, lowercase mono label. */
export function socialTile(theme: ThemeId, i: number) {
  const c = palette(theme);
  const s = socials[i];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE_W}" height="${TILE_H}" viewBox="0 0 ${TILE_W} ${TILE_H}" role="img" aria-labelledby="t">
<title id="t">${esc(s.label)}</title>
<style>${fontCss(["mono"])}.l{font:300 12px ${STACK.mono};letter-spacing:.06em;fill:${c.ink}}</style>
<rect x=".5" y=".5" width="${TILE_W - 1}" height="${TILE_H - 1}" fill="${c["surface-100"]}" stroke="${c.line}"/>
<g transform="translate(18 16)">${ICONS[s.id](c.ink)}</g>
<text class="l" x="56" y="32.5">${esc(s.label)}</text>
</svg>`;
}
