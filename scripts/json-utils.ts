import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export function mergeDeep(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof result[key] === "object" &&
      result[key] !== null &&
      !Array.isArray(result[key])
    ) {
      result[key] = mergeDeep(
        result[key] as Record<string, unknown>,
        value as Record<string, unknown>,
      );
    } else {
      result[key] = value;
    }
  }
  return result;
}

export function readLangData(lang: string): unknown {
  const langPath = resolve(process.cwd(), `src/i18n/${lang}.json`);
  const commonPath = resolve(process.cwd(), "src/i18n/common.json");
  const raw = JSON.parse(readFileSync(langPath, "utf-8")) as Record<string, unknown>;
  const common = JSON.parse(readFileSync(commonPath, "utf-8")) as Record<string, unknown>;
  return mergeDeep(raw, common);
}
