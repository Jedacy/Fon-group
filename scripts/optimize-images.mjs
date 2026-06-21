import { spawn } from "node:child_process";
import { mkdir, readdir, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import ffmpegPath from "ffmpeg-static";

const sourceRoot = resolve("src/assets");
const outputRoot = resolve("src/assets/optimized");
const rasterExtensions = new Set([".png", ".jpg", ".jpeg"]);
const logoPathHints = [
  `${join("src", "assets", "Partners")}`,
  `${join("src", "assets", "Awards")}`,
  "Logo",
  "Watermark",
  "Fon ",
  "FonStat",
  "Choptime",
  "Oasis.png",
  "Group ",
];
const maxWidth = 1920;

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function isLogoLike(filePath) {
  return logoPathHints.some((hint) => filePath.includes(hint));
}

function outputPathFor(filePath) {
  const relativePath = relative(sourceRoot, filePath);
  const withoutExtension = relativePath.slice(0, -extname(relativePath).length);

  return resolve(outputRoot, `${withoutExtension}.webp`);
}

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);

    if (fullPath.startsWith(outputRoot)) {
      continue;
    }

    if (entry.isDirectory()) {
      images.push(...(await collectImages(fullPath)));
      continue;
    }

    if (entry.isFile() && rasterExtensions.has(extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }

  return images;
}

function runFfmpeg(args) {
  return new Promise((resolveCommand, reject) => {
    const process = spawn(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";

    process.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    process.on("error", reject);
    process.on("close", (code) => {
      if (code === 0) {
        resolveCommand();
        return;
      }

      reject(new Error(`ffmpeg exited with code ${code}\n${stderr}`));
    });
  });
}

async function optimizeImage(filePath) {
  const targetPath = outputPathFor(filePath);
  const sourceStats = await stat(filePath);
  const quality = isLogoLike(filePath) ? "90" : "80";

  await mkdir(resolve(targetPath, ".."), { recursive: true });
  await runFfmpeg([
    "-y",
    "-i",
    filePath,
    "-vf",
    `scale='min(iw,${maxWidth})':-2`,
    "-c:v",
    "libwebp",
    "-quality",
    quality,
    "-compression_level",
    "6",
    "-preset",
    isLogoLike(filePath) ? "picture" : "photo",
    targetPath,
  ]);

  const targetStats = await stat(targetPath);

  return {
    source: filePath,
    target: targetPath,
    originalBytes: sourceStats.size,
    optimizedBytes: targetStats.size,
  };
}

async function main() {
  if (!ffmpegPath) {
    throw new Error("ffmpeg-static did not provide an ffmpeg binary path");
  }

  const images = await collectImages(sourceRoot);
  const results = [];

  for (const image of images) {
    results.push(await optimizeImage(image));
  }

  const originalTotal = results.reduce((total, result) => total + result.originalBytes, 0);
  const optimizedTotal = results.reduce((total, result) => total + result.optimizedBytes, 0);
  const savedPercent = originalTotal === 0 ? 0 : ((originalTotal - optimizedTotal) / originalTotal) * 100;

  console.log(`Optimized ${results.length} images into ${relative(process.cwd(), outputRoot)}`);
  console.log(`Original total: ${formatBytes(originalTotal)}`);
  console.log(`Optimized total: ${formatBytes(optimizedTotal)}`);
  console.log(`Saved: ${formatBytes(originalTotal - optimizedTotal)} (${savedPercent.toFixed(1)}%)`);
  console.log("");

  for (const result of results) {
    const saved = result.originalBytes - result.optimizedBytes;
    const percent = result.originalBytes === 0 ? 0 : (saved / result.originalBytes) * 100;
    console.log(
      `${relative(process.cwd(), result.source)} -> ${relative(process.cwd(), result.target)} | ${formatBytes(
        result.originalBytes,
      )} -> ${formatBytes(result.optimizedBytes)} (${percent.toFixed(1)}%)`,
    );
  }

  console.log("");
  console.log("Skipped: SVG files, video files, public favicons, and existing optimized outputs.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
