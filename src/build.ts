import { mkdirSync, writeFileSync } from "node:fs";
import { THEMES } from "./theme.js";
import { fetchProfile, MOCK } from "./github.js";
import { header } from "./cards/header.js";
import { stats } from "./cards/stats.js";
import { languages } from "./cards/languages.js";
import { activity } from "./cards/activity.js";

const login = process.env.PROFILE_LOGIN ?? "frjr17";
const token = process.env.GH_TOKEN;
const mock = process.argv.includes("--mock");
if (!mock && !token) throw new Error("GH_TOKEN is required (or run with --mock)");

const p = mock ? MOCK : await fetchProfile(login, token!);
mkdirSync("dist", { recursive: true });

for (const t of THEMES) {
  const cards = { header: header(t), stats: stats(t, p), languages: languages(t, p), activity: activity(t, p) };
  for (const [name, svg] of Object.entries(cards)) {
    writeFileSync(`dist/${name}-${t}.svg`, svg);
    console.log(`dist/${name}-${t}.svg  ${(svg.length / 1024).toFixed(0)} KB`);
  }
}
