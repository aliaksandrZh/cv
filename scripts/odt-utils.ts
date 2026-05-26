import { createWriteStream, readFileSync, writeFileSync } from "fs";
import { mkdirSync, rmSync, readdirSync, statSync } from "fs";
import { resolve } from "path";
import { XMLParser, XMLBuilder } from "fast-xml-parser";
import AdmZip from "adm-zip";

const XML_OPTIONS = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseAttributeValue: false,
  preserveOrder: true,
  trimValues: false,
  processEntities: true,
};

const BUILDER_OPTIONS = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  preserveOrder: true,
  trimValues: false,
  suppressEmptyNode: false,
};

export { readFileSync, writeFileSync, rmSync, mkdirSync } from "fs";

export function extractOdt(odtPath: string, outDir: string): void {
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  const zip = new AdmZip(odtPath);
  zip.extractAllTo(outDir, true);
}

export function repackOdt(sourceDir: string, odtPath: string): void {
  const zip = new AdmZip();

  const addEntry = (filePath: string, entryPath: string): void => {
    const content = readFileSync(filePath);
    if (entryPath === "mimetype") {
      zip.addFile(entryPath, content, "", 0);
    } else {
      zip.addFile(entryPath, content, "", 8);
    }
  };

  const walkDir = (dir: string, prefix: string): void => {
    const entries = readFileSync(dir)
      .toString()
      .split("\n")
      .filter(Boolean);
    for (const entry of entries) {
      // This won't work with fs.readdirSync
    }
  };

  const addFilesRecursively = (dir: string, prefix = ""): void => {
    const items = readdirSync(dir);
    for (const item of items) {
      const fullPath = resolve(dir, item);
      const relPath = prefix ? `${prefix}/${item}` : item;
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        addFilesRecursively(fullPath, relPath);
      } else {
        addEntry(fullPath, relPath);
      }
    }
  };

  addFilesRecursively(sourceDir);
  zip.writeZip(odtPath);
}

export function parseContentXml(xml: string): any[] {
  const parser = new XMLParser(XML_OPTIONS);
  return parser.parse(xml);
}

export function buildContentXml(parsed: any[]): string {
  const builder = new XMLBuilder(BUILDER_OPTIONS);
  return builder.build(parsed);
}

export function getTagName(node: unknown): string | undefined {
  if (typeof node !== "object" || node === null) return undefined;
  const keys = Object.keys(node as Record<string, unknown>).filter(
    (k) => k !== ":@"
  );
  if (keys.length === 1) return keys[0];
  return undefined;
}

export function getAttrs(node: unknown): Record<string, unknown> {
  if (typeof node !== "object" || node === null) return {};
  return ((node as Record<string, unknown>)[":@"] as Record<string, unknown>) ?? {};
}

export function getChildren(node: unknown): unknown[] {
  const tag = getTagName(node);
  if (!tag) return [];
  const n = node as Record<string, unknown>;
  const children = n[tag];
  if (Array.isArray(children)) return children;
  return children !== undefined ? [children] : [];
}

export function isTextNode(node: unknown): node is { "#text": string } {
  return (
    typeof node === "object" &&
    node !== null &&
    "#text" in (node as Record<string, unknown>)
  );
}

export function getText(node: unknown): string {
  if (isTextNode(node)) return node["#text"] ?? "";
  const children = getChildren(node);
  return children.map(getText).join("");
}

export function setText(node: unknown, text: string): void {
  if (isTextNode(node)) {
    (node as { "#text": string })["#text"] = text;
    return;
  }
  const tag = getTagName(node);
  if (!tag) return;
  (node as Record<string, unknown>)[tag] = [{ "#text": text }];
}

export function replaceInNode(node: unknown, search: string | RegExp, replace: string): void {
  if (Array.isArray(node)) {
    for (const item of node) {
      replaceInNode(item, search, replace);
    }
    return;
  }
  if (isTextNode(node)) {
    const t = node["#text"];
    if (typeof t === "string") {
      node["#text"] = t.replace(search, replace);
    }
    return;
  }
  const tag = getTagName(node);
  if (!tag) return;
  const children = getChildren(node);
  for (const child of children) {
    replaceInNode(child, search, replace);
  }
}

export function walk(
  nodes: unknown[],
  callback: (node: unknown, parent: unknown[] | null, index: number) => void | "skip"
): void {
  const recurse = (arr: unknown[], parent: unknown[] | null): void => {
    for (let i = 0; i < arr.length; i++) {
      const node = arr[i];
      const result = callback(node, parent, i);
      if (result === "skip") continue;
      if (isTextNode(node)) continue;
      const children = getChildren(node);
      if (children.length > 0) {
        recurse(children as unknown[], arr);
      }
    }
  };
  recurse(nodes, null);
}

export function mergeAdjacentSpans(nodes: unknown[]): void {
  const mergeInArray = (arr: unknown[]): void => {
    let i = 0;
    while (i < arr.length - 1) {
      const current = arr[i];
      const next = arr[i + 1];

      // Merge adjacent text nodes
      if (isTextNode(current) && isTextNode(next)) {
        const merged =
          String(current["#text"] ?? "") + String(next["#text"] ?? "");
        arr.splice(i, 2, { "#text": merged });
        continue;
      }

      // Merge adjacent spans with same style
      const curTag = getTagName(current);
      const nextTag = getTagName(next);
      if (curTag === "text:span" && nextTag === "text:span") {
        const curAttrs = getAttrs(current);
        const nextAttrs = getAttrs(next);
        // Compare style names, ignoring rsid differences
        if (
          curAttrs["@_text:style-name"] === nextAttrs["@_text:style-name"]
        ) {
          const curChildren = getChildren(current);
          const nextChildren = getChildren(next);
          const mergedChildren = [...curChildren, ...nextChildren];
          mergeInArray(mergedChildren);
          const mergedSpan: Record<string, unknown> = {
            "text:span": mergedChildren,
            ":@": { "@_text:style-name": curAttrs["@_text:style-name"] },
          };
          arr.splice(i, 2, mergedSpan);
          continue;
        }
      }

      i++;
    }
  };

  mergeInArray(nodes);

  // Recurse into child arrays
  for (const node of nodes) {
    if (isTextNode(node)) continue;
    const children = getChildren(node);
    if (children.length > 0) {
      mergeAdjacentSpans(children);
    }
  }
}

export function findNodes(nodes: unknown[], tagName: string): unknown[] {
  const results: unknown[] = [];
  walk(nodes, (node) => {
    if (getTagName(node) === tagName) {
      results.push(node);
    }
  });
  return results;
}

export function cloneNode(node: unknown): unknown {
  return JSON.parse(JSON.stringify(node));
}

export function readOdtXml(odtPath: string): { parsed: any[]; tempDir: string } {
  const tempDir = resolve(".tmp_odt", String(Date.now()));
  extractOdt(odtPath, tempDir);
  const xml = readFileSync(resolve(tempDir, "content.xml"), "utf-8");
  const parsed = parseContentXml(xml);
  return { parsed, tempDir };
}

export function writeOdtXml(
  parsed: any[],
  tempDir: string,
  odtPath: string
): void {
  const xml = buildContentXml(parsed);
  writeFileSync(resolve(tempDir, "content.xml"), xml, "utf-8");
  repackOdt(tempDir, odtPath);
  rmSync(tempDir, { recursive: true, force: true });
}
