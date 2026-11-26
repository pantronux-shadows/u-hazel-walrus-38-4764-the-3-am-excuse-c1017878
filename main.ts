// The 3 AM Excuse (program/v1): write one line to /output/entry.txt —
// the excuse this hardware wallet gives for refusing to sign at 3 AM.
// Deterministic: no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Denied. At 3 AM my threat model has one entry: you, unsupervised. Come back at noon and bring a witness.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${JOKE.length}`);
}
if (!JOKE.trim()) {
  throw new Error("entry text must not be white space only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
