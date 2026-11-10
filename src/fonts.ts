import { readFileSync } from "node:fs";

// SVGs rendered through <img> (what GitHub does) can't fetch remote fonts,
// so every face is embedded as a data URI. Only embed what a card uses.
const FACES = {
  display: { family: "Gloock", file: "gloock-latin-400-normal.woff2", weight: 400, style: "normal" },
  sans: { family: "Schibsted Grotesk", file: "schibsted-grotesk-latin-400-normal.woff2", weight: 400, style: "normal" },
  sansItalic: { family: "Schibsted Grotesk", file: "schibsted-grotesk-latin-400-italic.woff2", weight: 400, style: "italic" },
  sansBold: { family: "Schibsted Grotesk", file: "schibsted-grotesk-latin-600-normal.woff2", weight: 600, style: "normal" },
  mono: { family: "Martian Mono", file: "martian-mono-latin-300-normal.woff2", weight: 300, style: "normal" },
} as const;
export type Face = keyof typeof FACES;

const cache = new Map<Face, string>();
export function fontCss(faces: Face[]): string {
  return faces
    .map((k) => {
      if (!cache.has(k)) {
        const f = FACES[k];
        const b64 = readFileSync(`brand/fonts/${f.file}`).toString("base64");
        cache.set(k, `@font-face{font-family:"${f.family}";font-weight:${f.weight};font-style:${f.style};src:url(data:font/woff2;base64,${b64}) format("woff2");}`);
      }
      return cache.get(k)!;
    })
    .join("");
}

export const STACK = {
  display: `"Gloock", Georgia, serif`,
  sans: `"Schibsted Grotesk", system-ui, sans-serif`,
  mono: `"Martian Mono", ui-monospace, Menlo, monospace`,
};
