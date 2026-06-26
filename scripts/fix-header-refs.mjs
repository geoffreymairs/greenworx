import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "src");

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)
  ).filter((f) => extname(f) === ".tsx");
}

let updated = 0;
for (const file of walk(SRC)) {
  const orig = readFileSync(file, "utf8");
  const next = orig.replace(/(header-[^"]+)\.jpg/g, "$1.webp");
  if (next !== orig) {
    writeFileSync(file, next, "utf8");
    console.log("Updated:", file.replace(SRC, "").replace(/\\/g, "/"));
    updated++;
  }
}
console.log(`\nDone — ${updated} files updated`);
