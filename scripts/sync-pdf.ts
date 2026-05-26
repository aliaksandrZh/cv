import { readFileSync, existsSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const CONFIG = JSON.parse(readFileSync(resolve(process.cwd(), "cv-config.json"), "utf-8"));

const SOFFICE_PATHS = [
  "/Applications/LibreOffice.app/Contents/MacOS/soffice",
  "/usr/bin/soffice",
  "/usr/bin/libreoffice",
];

function findSoffice(): string | undefined {
  return SOFFICE_PATHS.find((p) => existsSync(p));
}

function main(): void {
  const lang = process.argv[2] ?? "en";
  if (!["en", "ru"].includes(lang)) {
    console.error("Usage: npx tsx scripts/sync-pdf.ts [en|ru]");
    process.exit(1);
  }

  if (!CONFIG.pdf.enabled[lang]) {
    console.log(`Skipped ${lang} (disabled in cv-config.json)`);
    return;
  }

  const soffice = findSoffice();
  if (!soffice) {
    console.error("LibreOffice not found. Expected at one of:");
    SOFFICE_PATHS.forEach((p) => console.error(`  ${p}`));
    process.exit(1);
  }

  const odtName = CONFIG.odt.output[lang];
  const odtPath = resolve(process.cwd(), CONFIG.odt.outputDir, odtName);
  if (!existsSync(odtPath)) {
    console.error(`ODT not found: ${odtPath}`);
    console.error("Run 'npm run odt:sync' first.");
    process.exit(1);
  }

  const outDir = resolve(process.cwd(), CONFIG.pdf.outputDir);
  const outName = CONFIG.pdf.output[lang];
  const outPath = resolve(outDir, outName);

  execSync(
    `"${soffice}" --headless --convert-to pdf:writer_pdf_Export --outdir "${outDir}" "${odtPath}"`,
    { stdio: "inherit" }
  );

  const generatedPdf = resolve(outDir, odtName.replace(/\.odt$/i, ".pdf"));
  if (existsSync(generatedPdf) && generatedPdf !== outPath) {
    copyFileSync(generatedPdf, outPath);
  }

  console.log(`Synced ${lang} → ${outPath}`);
}

main();
