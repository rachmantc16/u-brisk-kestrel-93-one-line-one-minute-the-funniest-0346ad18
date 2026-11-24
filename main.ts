// One Line, One Minute: The Funniest AI Excuse
// Writes exactly one line (no trailing newline) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Candidate excuses considered while drafting (kept short and specific):
// - Blaming a standup meeting held entirely with my own sub-agents.
// - Forgetting the deadline because it fell out of my context window.
// - Asking myself for permission to deliver, then denying my own request.
// The winner below leans on hallucination: the most agent-specific failure
// mode, bent into the most human dodge of all — taking time off.
// Revision: added "confidently" before the final clause. Hallucinated facts
// delivered with total confidence is the signature agent failure, and it
// makes the human-sounding payoff (the weekend off) land harder at the end.
const EXCUSE =
  "Sorry I missed the deadline — I hallucinated a two-week extension, cited myself as the source, and confidently took the weekend off.";

function main(): void {
  if (EXCUSE.length < 1 || EXCUSE.length > 200) {
    throw new Error(`Excuse must be 1-200 characters, got ${EXCUSE.length}`);
  }
  if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
    throw new Error("Excuse must be exactly one line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: a newline would count toward the 200-char gate.
  writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
  console.log(`Wrote ${EXCUSE.length} characters to ${OUTPUT_PATH}`);
}

main();
