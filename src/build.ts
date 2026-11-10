import { mkdirSync, writeFileSync } from "node:fs";
import { THEMES } from "./theme.js";
import { fetchProfile, MOCK } from "./github.js";
import { header } from "./cards/header.js";
import { stats } from "./cards/stats.js";
import { languages } from "./cards/languages.js";
import { activity } from "./cards/activity.js";
import { nowCard } from "./cards/now.js";
import { workCard } from "./cards/work.js";
import { experienceCard } from "./cards/experience.js";
import { contactCard } from "./cards/contact.js";
import { badgeCard } from "./cards/badge.js";
import { socialTile } from "./cards/social.js";
import { badges, socials, work } from "./content.js";

const login = process.env.PROFILE_LOGIN ?? "frjr17";
const token = process.env.GH_TOKEN;
const mock = process.argv.includes("--mock");
if (!mock && !token) throw new Error("GH_TOKEN is required (or run with --mock)");

const p = mock ? MOCK : await fetchProfile(login, token!);
mkdirSync("dist", { recursive: true });

for (const t of THEMES) {
  const cards: Record<string, string> = {
    header: header(t), stats: stats(t, p), languages: languages(t, p), activity: activity(t, p),
    now: nowCard(t), experience: experienceCard(t), contact: contactCard(t),
  };
  work.forEach((_, i) => (cards[`work-${String(i + 1).padStart(2, "0")}`] = workCard(t, i)));
  badges.forEach((b, i) => (cards[`badge-${b.id}`] = badgeCard(t, i)));
  socials.forEach((s, i) => (cards[`social-${s.id}`] = socialTile(t, i)));
  for (const [name, svg] of Object.entries(cards)) {
    writeFileSync(`dist/${name}-${t}.svg`, svg);
    console.log(`dist/${name}-${t}.svg  ${(svg.length / 1024).toFixed(0)} KB`);
  }
}
