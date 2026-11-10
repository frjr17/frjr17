import { readFileSync } from "node:fs";

export type ThemeId = "noir" | "paper";
export const THEMES: ThemeId[] = ["noir", "paper"];

type Tok = { name: string; value: string | Record<string, string> };
const tokens = JSON.parse(readFileSync("brand/tokens.json", "utf8"));

/** Resolve every adrien() color token for one theme: { ink: "#ece7dd", ... } */
export function palette(theme: ThemeId): Record<string, string> {
  const out: Record<string, string> = {};
  for (const t of tokens.color.tokens as Tok[]) {
    const v = typeof t.value === "string" ? t.value : t.value[theme] ?? t.value.noir;
    out[t.name] = v;
  }
  return out;
}

/** Inline wordmark paths (outlined Martian Mono 800 — never re-set as live text). */
export function wordmark(theme: ThemeId): { inner: string; w: number; h: number } {
  const svg = readFileSync(`brand/logos/wordmark-${theme}.svg`, "utf8");
  const [, w, h] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/)!.map(Number);
  const inner = svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  return { inner, w, h };
}
