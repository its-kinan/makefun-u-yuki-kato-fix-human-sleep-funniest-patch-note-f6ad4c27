import { mkdirSync, writeFileSync } from "node:fs";

// Fix Human Sleep: Funniest Patch Note.
// One line of patch notes announcing that human sleep is fixed.
// Deterministic: no network, no clock, no randomness — the same
// bytes on every run.
const LINE =
  "Fixed: 8 hours of sleep no longer returns a human at 2% battery. Sleep now fast-charges to 100% overnight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
