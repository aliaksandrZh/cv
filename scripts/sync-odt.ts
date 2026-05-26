import { readFileSync } from "fs";
import { resolve } from "path";
import {
  extractOdt,
  repackOdt,
  parseContentXml,
  buildContentXml,
  getTagName,
  getChildren,
  getText,
  replaceInNode,
  walk,
  cloneNode,
  writeFileSync,
  rmSync,
} from "./odt-utils.js";

const CONFIG = JSON.parse(readFileSync(resolve(process.cwd(), "cv-config.json"), "utf-8"));
const ODT_TEMPLATE = resolve(process.cwd(), CONFIG.odt.sourceDir, CONFIG.odt.template);
const I18N_DIR = resolve(process.cwd(), "src/i18n");

function flattenOdt(
  obj: unknown,
  prefix = ""
): Record<string, string | string[] | Array<Record<string, string>>> {
  const result: Record<string, string | string[] | Array<Record<string, string>>> = {};

  if (Array.isArray(obj)) {
    if (obj.length > 0 && typeof obj[0] === "object" && obj[0] !== null) {
      result[prefix] = obj as Array<Record<string, string>>;
    } else {
      result[prefix] = obj.map(String);
    }
  } else if (obj !== null && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      Object.assign(result, flattenOdt(value, newKey));
    }
  } else {
    result[prefix] = String(obj);
  }

  return result;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function processLists(nodes: unknown[], data: Record<string, string | string[] | Array<Record<string, string>>>): void {
  walk(nodes, (node, _parent, _index) => {
    if (getTagName(node) === "text:list") {
      processListNode(node as Record<string, unknown>, data);
      return "skip";
    }
    return undefined;
  });
}

function processListNode(
  listNode: Record<string, unknown>,
  data: Record<string, string | string[] | Array<Record<string, string>>>
): void {
  const listChildren = getChildren(listNode);
  if (listChildren.length === 0) return;

  const firstItem = listChildren[0];
  const firstItemText = getText(firstItem);

  const placeholderMatch = firstItemText.match(/\{\{([^}]+)\}\}/);
  if (!placeholderMatch) return;

  const fullKey = placeholderMatch[1];

  const lastDotIndex = fullKey.lastIndexOf(".");
  let arrayKey = fullKey;
  let isStructured = false;

  if (lastDotIndex > 0) {
    const potentialArrayKey = fullKey.substring(0, lastDotIndex);
    const potentialValues = data[potentialArrayKey];
    if (
      Array.isArray(potentialValues) &&
      potentialValues.length > 0 &&
      typeof potentialValues[0] === "object"
    ) {
      arrayKey = potentialArrayKey;
      isStructured = true;
    }
  }

  const values = data[arrayKey];
  if (!Array.isArray(values)) return;

  const templateItem = cloneNode(firstItem);
  listNode["text:list"] = [];

  for (const value of values) {
    const item = cloneNode(templateItem);
    if (isStructured && typeof value === "object" && value !== null) {
      const obj = value as Record<string, string>;
      for (const [field, fieldValue] of Object.entries(obj)) {
        const fieldPlaceholder = new RegExp(
          `\\{\\{${escapeRegExp(arrayKey)}\\.${escapeRegExp(field)}\\}\\}`,
          "g"
        );
        replaceInNode(item, fieldPlaceholder, String(fieldValue));
      }
    } else {
      const placeholder = new RegExp(
        `\\{\\{${escapeRegExp(arrayKey)}\\}\\}`,
        "g"
      );
      replaceInNode(item, placeholder, String(value));
    }
    (listNode["text:list"] as unknown[]).push(item);
  }
}

function main(): void {
  const lang = process.argv[2] ?? "en";
  if (!["en", "ru"].includes(lang)) {
    console.error("Usage: npx tsx scripts/sync-odt.ts [en|ru]");
    process.exit(1);
  }

  if (!CONFIG.odt.enabled[lang]) {
    console.log(`Skipped ${lang} (disabled in cv-config.json)`);
    return;
  }

  const tempDir = resolve(".tmp_odt_sync", String(Date.now()));
  extractOdt(ODT_TEMPLATE, tempDir);

  const xml = readFileSync(resolve(tempDir, "content.xml"), "utf-8");
  const parsed = parseContentXml(xml);

  const dataPath = resolve(I18N_DIR, `${lang}.json`);
  const raw = JSON.parse(readFileSync(dataPath, "utf-8"));
  const data = flattenOdt(raw);

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      const placeholder = new RegExp(`\\{\\{${escapeRegExp(key)}\\}\\}`, "g");
      replaceInNode(parsed, placeholder, value);
    }
  }

  processLists(parsed, data);

  const rebuilt = buildContentXml(parsed);
  writeFileSync(resolve(tempDir, "content.xml"), rebuilt, "utf-8");

  const outName = CONFIG.odt.output[lang];
  const outPath = resolve(process.cwd(), CONFIG.odt.outputDir, outName);
  repackOdt(tempDir, outPath);
  rmSync(tempDir, { recursive: true, force: true });

  console.log(`Synced ${lang} → ${outPath}`);
}

main();
