import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import ffmpegPath from "ffmpeg-static";

const source = resolve("src/assets/HomeVideo.mp4");
const outputDir = resolve("public/media/home-video");

const variants = [
  {
    name: "480p",
    width: 854,
    height: 480,
    bandwidth: 900000,
    maxrate: "900k",
    bufsize: "1800k",
  },
  {
    name: "720p",
    width: 1280,
    height: 720,
    bandwidth: 1800000,
    maxrate: "1800k",
    bufsize: "3600k",
  },
  {
    name: "1080p",
    width: 1920,
    height: 1080,
    bandwidth: 3200000,
    maxrate: "3200k",
    bufsize: "6400k",
  },
];

function runFfmpeg(args) {
  return new Promise((resolveCommand, reject) => {
    const process = spawn(ffmpegPath, args, { stdio: "inherit" });

    process.on("error", reject);
    process.on("close", (code) => {
      if (code === 0) {
        resolveCommand();
        return;
      }

      reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

async function encodeVariant(variant) {
  const variantDir = resolve(outputDir, variant.name);
  await mkdir(variantDir, { recursive: true });

  await runFfmpeg([
    "-y",
    "-i",
    source,
    "-an",
    "-vf",
    `scale=-2:${variant.height}`,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-profile:v",
    "main",
    "-crf",
    "24",
    "-maxrate",
    variant.maxrate,
    "-bufsize",
    variant.bufsize,
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-hls_time",
    "4",
    "-hls_playlist_type",
    "vod",
    "-hls_segment_filename",
    resolve(variantDir, "segment-%03d.ts"),
    resolve(variantDir, "index.m3u8"),
  ]);
}

async function encodeFallback() {
  await runFfmpeg([
    "-y",
    "-i",
    source,
    "-an",
    "-vf",
    "scale=-2:720",
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-profile:v",
    "main",
    "-crf",
    "25",
    "-maxrate",
    "1800k",
    "-bufsize",
    "3600k",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    resolve(outputDir, "home-video-fallback.mp4"),
  ]);
}

async function writeMasterPlaylist() {
  const lines = [
    "#EXTM3U",
    "#EXT-X-VERSION:3",
    ...variants.flatMap((variant) => [
      `#EXT-X-STREAM-INF:BANDWIDTH=${variant.bandwidth},RESOLUTION=${variant.width}x${variant.height}`,
      `${variant.name}/index.m3u8`,
    ]),
    "",
  ];

  await writeFile(resolve(outputDir, "master.m3u8"), lines.join("\n"));
}

async function main() {
  if (!ffmpegPath) {
    throw new Error("ffmpeg-static did not provide an ffmpeg binary path");
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(dirname(outputDir), { recursive: true });
  await mkdir(outputDir, { recursive: true });

  for (const variant of variants) {
    await encodeVariant(variant);
  }

  await encodeFallback();
  await writeMasterPlaylist();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
