import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Ice cream first, salad last — your priorities are noted, and your freezer is filing a formal complaint.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
