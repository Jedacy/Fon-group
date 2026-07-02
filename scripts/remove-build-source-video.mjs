import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const buildSourceVideo = resolve("dist/FON Video.mp4");

await rm(buildSourceVideo, { force: true });
