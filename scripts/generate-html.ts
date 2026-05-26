import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
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

export function generateHtml(): void {
  const template = readFileSync(templatePath, "utf-8");

  for (const lang of langs) {
    const raw = readLangData(lang);
    const data = flatten(raw);

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
