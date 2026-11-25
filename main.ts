// The Excuse That Almost Works — make.fun entry
// Writes the sealed one-line excuse to /output/entry.txt.
// Deterministic: no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The sealed entry — write exactly this, never change it.
const ENTRY =
  "Boss, my VPN locked after 47 failed logins, password expired at midnight, the exact minute GTA 6 unlocked.";

// Output dir is /output by default; override with OUTPUT_DIR for local checks.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// Create the output directory if needed, then write the entry verbatim.
// writeFileSync writes exactly ENTRY — no trailing newline is added.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
