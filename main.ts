import { mkdirSync, writeFileSync } from "node:fs";

// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// The entry line: a quiet, earned moment of pride. Written from scratch:
// a small person, a long effort (six winters of slipping on the same icy
// step), finally landing — two buckets of coal carried up without stopping.
// The pride is never named or congratulated; it arrives in the last word.
const LINE =
  "For six winters her father watched from the porch as Ana slipped on the same icy step, until tonight, through falling snow, she carried two buckets of coal up it without stopping, set them down, and looked back at him smiling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
