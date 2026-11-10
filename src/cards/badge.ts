import { readFileSync } from "node:fs";
import { esc, frame, PAD } from "./frame.js";
import { type ThemeId } from "../theme.js";
import { badges } from "../content.js";

export const HALF_W = 412; // two side by side fill the README column

// One certification per card, with the official Credly badge image embedded.
export function badgeCard(theme: ThemeId, i: number) {
  const b = badges[i];
  const png = readFileSync(`brand/badges/${b.id}.png`).toString("base64");
  const h = 188, size = 96, x = HALF_W - PAD - size;
  return frame({
    theme, w: HALF_W, h, eyebrow: `07 / certification() — ${String(i + 1).padStart(2, "0")}`,
    title: `${b.org} ${b.name}, ${b.years}`, faces: ["display", "sans"],
    css: `.cert{font:400 28px "Gloock", Georgia, serif;letter-spacing:-.01em}`,
    body: `
<image href="data:image/png;base64,${png}" x="${x}" y="${(h - size) / 2 + 10}" width="${size}" height="${size}"/>
<text class="body muted" x="${PAD}" y="${PAD + 56}">${esc(b.org)}</text>
<text class="cert display" x="${PAD}" y="${PAD + 92}">${esc(b.name)}</text>
<text class="mono" x="${PAD}" y="${h - PAD}">${esc(b.years)} · verify()</text>`,
  });
}
