import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { readLangData } from "./json-utils.js";

interface Config {
  markdown: {
    template: string;
    outputDir: string;
    output: Record<string, string>;
    enabled: Record<string, boolean>;
  };
}

const flatten = (
  obj: unknown,
  prefix = "",
): Record<string, string | string[]> => {
  const result: Record<string, string | string[]> = {};

  if (obj === null || obj === undefined) {
    return result;
  }

  if (Array.isArray(obj)) {
    if (obj.length > 0) {
      if (typeof obj[0] === "string") {
        result[prefix] = obj.map((s) => String(s));
      } else if (typeof obj[0] === "object" && obj[0] !== null) {
        result[prefix] = obj.map((item) => {
          const parts: string[] = [];
          const typedItem = item as Record<string, unknown>;
          if (typedItem.name) {
            parts.push(`**${typedItem.name}**`);
          }
          if (typedItem.downloads) {
            parts.push(`(${typedItem.downloads})`);
          }
          if (typedItem.desc) {
            parts.push(`: ${typedItem.desc}`);
          }
          return parts.join(" ");
        });
      }
    }
    return result;
  }

  if (typeof obj === "object") {
    const typed = obj as Record<string, unknown>;
    for (const key of Object.keys(typed)) {
      const value = typed[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      Object.assign(result, flatten(value, newKey));
    }
    return result;
  }

  result[prefix] = String(obj);
  return result;
};

const toMarkdownList = (items: string[]): string =>
  items.map((s) => `* ${s}`).join("\n");

const main = (): void => {
  const lang = process.argv[2];
  if (!lang) {
    console.error("Usage: tsx sync-md.ts <lang>");
    process.exit(1);
  }

  const configPath = resolve("cv-config.json");
  const config: Config = JSON.parse(readFileSync(configPath, "utf-8")) as Config;

  if (!config.markdown.enabled[lang]) {
    console.log(`Markdown sync disabled for language: ${lang}`);
    return;
  }

  const templatePath = resolve(config.markdown.template);
  const template = readFileSync(templatePath, "utf-8");

  const raw = readLangData(lang);
  const flat = flatten(raw);

  let output = template;
  for (const [key, value] of Object.entries(flat)) {
    const placeholder = `{{${key}}}`;
    if (Array.isArray(value)) {
      output = output.replaceAll(placeholder, toMarkdownList(value));
    } else {
      output = output.replaceAll(placeholder, value);
    }
  }

  const outputFile = resolve(
    config.markdown.outputDir,
    config.markdown.output[lang],
  );
  writeFileSync(outputFile, output, "utf-8");
  console.log(`Generated ${outputFile}`);
};

main();
