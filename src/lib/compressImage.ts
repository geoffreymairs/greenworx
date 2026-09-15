import imageCompression from "browser-image-compression";

// HEIC/HEIF files can't be rendered/compressed by most browsers directly,
// so we convert them to JPEG first, then run the standard compression pass.
const HEIC_EXTS = [".heic", ".heif"];

function isHeic(file: File): boolean {
  const mime = file.type.toLowerCase();
  const ext = "." + (file.name.split(".").pop()?.toLowerCase() ?? "");
  return mime === "image/heic" || mime === "image/heif" || HEIC_EXTS.includes(ext);
}

function swapExtension(name: string, ext: string): string {
  return name.replace(/\.[^.]+$/, "") + ext;
}

async function convertHeicToJpeg(file: File): Promise<File> {
  // heic2any is browser-only; import lazily so it never runs on the server.
  const heic2any = (await import("heic2any")).default;
  const converted = (await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.9,
  })) as Blob;
  return new File([converted], swapExtension(file.name, ".jpg"), {
    type: "image/jpeg",
    lastModified: Date.now(),
  });
}

export interface CompressResult {
  file: File;
  originalSize: number;
  converted: boolean;
}

/**
 * Converts HEIC/HEIF to JPEG and compresses any image down to at most
 * `maxSizeMB`, resizing very large photos. Returns the processed file plus
 * metadata. Falls back to the original file if processing fails.
 */
export async function compressImage(file: File, maxSizeMB = 2): Promise<CompressResult> {
  const originalSize = file.size;
  let working = file;
  let converted = false;

  try {
    if (isHeic(working)) {
      working = await convertHeicToJpeg(working);
      converted = true;
    }

    const compressed = await imageCompression(working, {
      maxSizeMB,
      maxWidthOrHeight: 2560,
      useWebWorker: true,
      fileType: "image/jpeg",
      initialQuality: 0.8,
    });

    const finalFile =
      compressed instanceof File
        ? compressed
        : new File([compressed], swapExtension(working.name, ".jpg"), {
            type: "image/jpeg",
            lastModified: Date.now(),
          });

    return { file: finalFile, originalSize, converted };
  } catch (err) {
    console.log("[v0] compressImage failed, using original:", err);
    // If conversion succeeded but compression failed, keep the JPEG.
    return { file: working, originalSize, converted };
  }
}
