import { frame, fmt, PAD, W } from "./frame.js";
import { palette, type ThemeId } from "../theme.js";
import type { Profile } from "../github.js";

// One amber thing: the headline number (contributions this year).
export function stats(theme: ThemeId, p: Profile) {
  const c = palette(theme);
  const items = [
    { v: p.contributionsYear, k: "contributions", amber: true },
    { v: p.pullRequests, k: "pull requests" },
    { v: p.stars, k: "stars earned" },
    { v: p.publicRepos, k: "public repos" },
  ];
  const col = (W - PAD * 2) / items.length;
  const body = items.map((it, i) => {
    const x = PAD + i * col;
    return `${i ? `<line x1="${x - 16}" y1="${PAD + 40}" x2="${x - 16}" y2="${PAD + 112}" stroke="${c.line}"/>` : ""}
<text class="display" x="${x}" y="${PAD + 88}"${it.amber ? ` style="fill:${c["amber-text"]}"` : ""}>${fmt(it.v)}</text>
<text class="mono" x="${x}" y="${PAD + 116}">${it.k}</text>`;
  }).join("");
  return frame({ theme, h: 184, eyebrow: "01 / stats()", title: `GitHub stats for ${p.login}`, faces: ["display"], body });
}
