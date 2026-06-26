/**
 * Gallery image processor
 * Converts raw gallery images → WebP thumbnails (600px), WebP full-size (1600px),
 * and tiny blur placeholders (base64). Outputs src/data/gallery.json.
 *
 * Run: node scripts/process-gallery.mjs
 */

import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { writeFileSync, existsSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const GALLERY_SRC  = join(ROOT, "public", "gallery");
const THUMBS_DIR   = join(ROOT, "public", "gallery", "thumbs");
const FULL_DIR     = join(ROOT, "public", "gallery", "full");
const OUTPUT_FILE  = join(ROOT, "src", "data", "gallery.json");

const THUMB_WIDTH  = 600;
const FULL_WIDTH   = 1600;
const THUMB_Q      = 82;
const FULL_Q       = 85;
const BLUR_PX      = 16;   // tiny image for blur placeholder
const BLUR_Q       = 20;

const VALID_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

async function toBase64DataURL(buf, mimeType = "image/webp") {
  return `data:${mimeType};base64,${buf.toString("base64")}`;
}

async function main() {
  await mkdir(THUMBS_DIR, { recursive: true });
  await mkdir(FULL_DIR,   { recursive: true });

  // Read source directory — skip sub-folders (thumbs, full)
  const allEntries = await readdir(GALLERY_SRC, { withFileTypes: true });
  const files = allEntries
    .filter((e) => e.isFile() && VALID_EXT.test(e.name))
    .map((e) => e.name)
    .sort();

  // Deduplicate by lowercase stem
  const seen = new Set();
  const unique = files.filter((f) => {
    const key = basename(f, extname(f)).toLowerCase();
    if (seen.has(key)) { console.log(`  ⚠ Skipping duplicate: ${f}`); return false; }
    seen.add(key);
    return true;
  });

  console.log(`Processing ${unique.length} images…\n`);

  const gallery = [];
  let ok = 0, fail = 0;

  for (const file of unique) {
    const inputPath  = join(GALLERY_SRC, file);
    const stem       = basename(file, extname(file)).toLowerCase();
    const thumbFile  = `${stem}.webp`;
    const fullFile   = `${stem}.webp`;
    const thumbPath  = join(THUMBS_DIR, thumbFile);
    const fullPath   = join(FULL_DIR, fullFile);

    try {
      // ── Thumbnail ──────────────────────────────────────────────────────────
      if (!existsSync(thumbPath)) {
        await sharp(inputPath)
          .rotate()                            // auto-orient from EXIF
          .resize(THUMB_WIDTH, null, { withoutEnlargement: true, fit: "inside" })
          .webp({ quality: THUMB_Q, effort: 4 })
          .toFile(thumbPath);
      }

      // ── Full-size ──────────────────────────────────────────────────────────
      if (!existsSync(fullPath)) {
        await sharp(inputPath)
          .rotate()
          .resize(FULL_WIDTH, null, { withoutEnlargement: true, fit: "inside" })
          .webp({ quality: FULL_Q, effort: 4 })
          .toFile(fullPath);
      }

      // ── Blur placeholder ───────────────────────────────────────────────────
      const blurBuf = await sharp(inputPath)
        .rotate()
        .resize(BLUR_PX, null, { fit: "inside" })
        .webp({ quality: BLUR_Q })
        .toBuffer();
      const blurDataURL = await toBase64DataURL(blurBuf);

      // ── Thumbnail dimensions (for CLS prevention) ──────────────────────────
      const thumbMeta = await sharp(thumbPath).metadata();

      gallery.push({
        src:         `/gallery/thumbs/${thumbFile}`,
        full:        `/gallery/full/${fullFile}`,
        width:       thumbMeta.width  ?? THUMB_WIDTH,
        height:      thumbMeta.height ?? Math.round(THUMB_WIDTH * 0.667),
        blurDataURL,
        alt:         "Greenworx landscaping project",
      });

      process.stdout.write(`  ✓ ${file.padEnd(28)} ${thumbMeta.width}×${thumbMeta.height}\n`);
      ok++;
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
      fail++;
    }
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(gallery, null, 2), "utf-8");
  console.log(`\n✔ Done — ${ok} processed, ${fail} failed.`);
  console.log(`  Output → src/data/gallery.json`);
  console.log(`  Thumbs → public/gallery/thumbs/ (${ok} WebP files)`);
  console.log(`  Full   → public/gallery/full/   (${ok} WebP files)`);
}

main().catch((err) => { console.error(err); process.exit(1); });
