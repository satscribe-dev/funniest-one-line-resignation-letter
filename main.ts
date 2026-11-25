// The Funniest One-Line Resignation Letter
// make.fun bounty: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// Writes one chosen resignation line to /output/entry.txt, deterministically.

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen entry (winner of the internal pairwise among 10 candidates):
// a cron job that ran at 03:00 every night for nine months, unthanked,
// whose only alert ever was the one fired when it stopped.
const ENTRY =
  "I ran at 03:00 every night for nine months while you slept, and the only alert I ever got was when I stopped. I am stopping.";

// Gate self-check (mirrors the sealed scorer): 1-140 chars, not only whitespace.
const len = [...ENTRY].length;
if (len < 1 || len > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${len} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
