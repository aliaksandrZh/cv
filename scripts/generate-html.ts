import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { readLangData } from "./json-utils.js";

const templatePath = resolve(process.cwd(), "src/template/index.html");
const outDir = process.cwd();
const langs = ["en", "ru"];

function flatten(obj: unknown, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};

  if (Array.isArray(obj)) {
    if (obj.length > 0 && typeof obj[0] === "object" && obj[0] !== null) {
      const items = obj.map((item) => {
        const o = item as Record<string, string>;
        return `<li><strong>${o.name}</strong> <strong>(${o.downloads})</strong>: ${o.desc}</li>`;
      }).join("");
      result[prefix] = items;
    } else {
      result[prefix] = obj.map((s) => `<li>${String(s)}</li>`).join("");
    }
  } else if (obj !== null && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      Object.assign(result, flatten(value, newKey));
    }
  } else {
    result[prefix] = String(obj);
  }

  return result;
}

function getDownloadData(): {
  options: string;
  href: string;
  filename: string;
} {
  const configPath = resolve(process.cwd(), "cv-config.json");
  const config = JSON.parse(readFileSync(configPath, "utf-8"));
  const publicCvDir = resolve(process.cwd(), "public", "cv");

  const existingFiles = new Set<string>();
  try {
    for (const file of readdirSync(publicCvDir)) {
      existingFiles.add(file);
    }
  } catch {
    // Directory does not exist yet
  }

  const fileSections = ["pdf", "odt", "markdown"];
  const options: string[] = [];
  const coveredFiles = new Set<string>();
  let firstEnabled: string | null = null;

  for (const key of fileSections) {
    const section = config[key];
    if (!section || !section.output) continue;

    for (const lang of ["en", "ru"]) {
      if (!section.enabled?.[lang] || !section.output[lang]) continue;

      const filename = section.output[lang];
      coveredFiles.add(filename);
      const ext = filename.split(".").pop() || filename;
      const isExisting = existingFiles.has(filename);

      if (!isExisting) continue;

      const label = `.${ext} (${lang.toUpperCase()})`;
      options.push(`<option value="${filename}">${label}</option>`);
      if (!firstEnabled) firstEnabled = filename;
    }
  }

  for (const file of existingFiles) {
    if (coveredFiles.has(file)) continue;
    const ext = file.split(".").pop() || file;
    options.push(`<option value="${file}">.${ext}</option>`);
    if (!firstEnabled) firstEnabled = file;
  }

  const optionsHtml = options.join("\n          ");
  const href = firstEnabled ? `../cv/${firstEnabled}` : "#";
  const filename = firstEnabled || "";

  return { options: optionsHtml, href, filename };
}

export function generateHtml(): void {
  const template = readFileSync(templatePath, "utf-8");

  for (const lang of langs) {
    const raw = readLangData(lang);
    const data = flatten(raw);

    const downloadData = getDownloadData();
    data["download.options"] = downloadData.options;
    data["download.href"] = downloadData.href;
    data["download.filename"] = downloadData.filename;

    let html = template;

    for (const [key, value] of Object.entries(data)) {
      const placeholder = new RegExp(`\\{{${key}\\}}`, "g");
      html = html.replace(placeholder, value);
    }

    const targetDir = resolve(outDir, lang);
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    const outPath = resolve(targetDir, "index.html");
    writeFileSync(outPath, html, "utf-8");
    console.log(`Generated ${lang}/index.html`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateHtml();
  console.log("Done.");
}
