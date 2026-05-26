import { readFileSync, existsSync, copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const CONFIG = JSON.parse(readFileSync(resolve(process.cwd(), "cv-config.json"), "utf-8"));

function main(): void {
  const publicDir = resolve(process.cwd(), "public");
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  const cvDir = resolve(publicDir, "cv");
  if (!existsSync(cvDir)) {
    mkdirSync(cvDir, { recursive: true });
  }

  const copyList: string[] = CONFIG.public?.copy ?? [];
  if (copyList.length === 0) {
    console.log("Nothing configured to copy.");
    return;
  }

  for (const key of copyList) {
    const section = CONFIG[key];
    if (!section) {
      console.error(`Config section missing: ${key}`);
      process.exit(1);
    }

    for (const lang of ["en", "ru"]) {
      if (!section.enabled[lang]) {
        console.log(`Skipped ${key} ${lang} (disabled)`);
        continue;
      }

      const fileName = section.output[lang];
      const src = resolve(process.cwd(), section.outputDir, fileName);
      const dst = resolve(cvDir, fileName);

      if (!existsSync(src)) {
        console.log(`Skipped ${key} ${lang} (not found: ${src})`);
        continue;
      }

      copyFileSync(src, dst);
      console.log(`Copied ${key} ${lang} → public/cv/${fileName}`);
    }
  }
}

main();
