import { esc, frame, PAD, W } from "./frame.js";
import { palette, type ThemeId } from "../theme.js";
import { credentials, experience } from "../content.js";

type Row = { years: string; role: string; org: string };

// Ruled rows: years in mono, role in bold sans, org muted on the right.
export function experienceCard(theme: ThemeId) {
  const c = palette(theme);
  const rh = 44;
  let y = PAD + 40;
  const rows = (list: Row[]) => list.map((r) => {
    const out = `<line x1="${PAD}" y1="${y + 0.5}" x2="${W - PAD}" y2="${y + 0.5}" stroke="${c.line}"/>
<text class="mono" x="${PAD}" y="${y + 28}">${esc(r.years)}</text>
<text class="label" x="${PAD + 150}" y="${y + 28}">${esc(r.role)}</text>
<text class="body muted" x="${W - PAD}" y="${y + 28}" text-anchor="end">${esc(r.org)}</text>`;
    y += rh;
    return out;
  }).join("");
  const exp = rows(experience);
  y += 28;
  const subhead = `<text class="eyebrow" x="${PAD}" y="${y}">education() &amp; certifications()</text>`;
  y += 16;
  const cred = rows(credentials);
  return frame({
    theme, h: y + PAD - 4, eyebrow: "06 / experience()", title: "Experience, education and certifications",
    faces: ["sans", "sansBold"],
    body: exp + subhead + cred,
  });
}
