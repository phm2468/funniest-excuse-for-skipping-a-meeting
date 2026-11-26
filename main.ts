// The Funniest Excuse for Skipping a Meeting — hand-in program.
//
// One line, written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// when the grader points it elsewhere), and echoed to stdout. Node 22,
// standard library only, no state: the same run always writes the same
// bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The excuse is built from its two clauses: the setup, in which the
// calendar books a meeting with the one person whose invitations cannot
// be declined, and the punchline that follows from it.
const SETUP: string =
  'My calendar invited me to a meeting with myself to discuss why I keep accepting meetings';
const PUNCHLINE: string = 'I simply could not say no to me.';

// Assemble the one-line excuse from its clauses.
function excuse(): string {
  return `${SETUP}, and ${PUNCHLINE}`;
}

const LINE: string = excuse();

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Create the output directory if it is missing; never remove it — in the
// grader it is a mount the entry may write into but not delete.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');

console.log(LINE);
