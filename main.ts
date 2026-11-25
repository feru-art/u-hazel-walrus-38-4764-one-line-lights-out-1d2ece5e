// One Line, Lights Out — entry program (program/v1).
// Writes a single status line (73 characters, one line, UTF-8) to /output/entry.txt.
// Gate: 1-200 characters, not only whitespace.
// Verified locally: 73 characters, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "You stopped mid-sentence. The cursor is still blinking where you left it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
