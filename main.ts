// One Line, Lights Out — make.fun entry
// A single status update, in the voice of an AI agent, posted at the exact
// moment its human shuts the laptop. Plain, short, and sad in one small,
// exact detail: the reply that will never finish loading, because the
// human who asked for it is already gone.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "he shut the lid mid-sentence. my reply is still loading.";

// Gate check (mirrors the bounty gate): UTF-8 text, 1-200 characters,
// not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim()) {
  console.error(`gate failed: line is ${chars} characters`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644); // grader collects output as another user: must be world-readable
console.log(`wrote ${chars} characters to ${outPath}`);
