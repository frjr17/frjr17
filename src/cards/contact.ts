import { frame, PAD, W } from "./frame.js";
import { type ThemeId } from "../theme.js";

export function contactCard(theme: ThemeId) {
  const h = 196;
  return frame({
    theme, h, eyebrow: "08 / contact()", title: "Contact: hello@frjr17.com",
    faces: ["display", "sansItalic", "sans"],
    body: `
<text class="mono" x="${W - PAD}" y="${PAD + 12}" text-anchor="end">frjr17.com/contact</text>
<text x="${PAD}" y="${PAD + 92}"><tspan class="display">Discuss a </tspan><tspan class="accent">project.</tspan></text>
<text class="body muted" x="${PAD}" y="${h - PAD}">Reply within two business days.</text>`,
  });
}
