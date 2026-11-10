import { esc, frame, PAD, W } from "./frame.js";
import { type ThemeId } from "../theme.js";
import { contact } from "../content.js";

export function contactCard(theme: ThemeId) {
  const h = 196;
  return frame({
    theme, h, eyebrow: "07 / contact()", title: `Contact: ${contact.email}`,
    faces: ["display", "sansItalic", "sans"],
    body: `
<text class="mono" x="${W - PAD}" y="${PAD + 12}" text-anchor="end">frjr17.com/contact</text>
<text x="${PAD}" y="${PAD + 92}"><tspan class="display">Discuss a </tspan><tspan class="accent">project.</tspan></text>
<text class="mono" x="${PAD}" y="${h - PAD}">${esc([contact.email, contact.linkedin, contact.github].join("  ·  "))}</text>`,
  });
}
