import { readFileSync, copyFileSync } from "fs";
import { resolve } from "path";
import {
  extractOdt,
  repackOdt,
  parseContentXml,
  buildContentXml,
  getTagName,
  getAttrs,
  getChildren,
  getText,
  setText,
  isTextNode,
  mergeAdjacentSpans,
  walk,
  cloneNode,
  writeFileSync,
  rmSync,
} from "./odt-utils.js";

const CONFIG = JSON.parse(readFileSync(resolve(process.cwd(), "cv-config.json"), "utf-8"));
const ODT_SOURCE = resolve(process.cwd(), CONFIG.odt.sourceDir, CONFIG.odt.source);
const ODT_TEMPLATE = resolve(process.cwd(), CONFIG.odt.sourceDir, CONFIG.odt.template);

function prepareTemplate(): void {
  copyFileSync(ODT_SOURCE, ODT_TEMPLATE);

  const tempDir = resolve(".tmp_odt_prepare", String(Date.now()));
  extractOdt(ODT_TEMPLATE, tempDir);

  const xml = readFileSync(resolve(tempDir, "content.xml"), "utf-8");
  const parsed = parseContentXml(xml);

  // Merge adjacent spans with identical styles
  mergeAdjacentSpans(parsed);

  // Locate the office:text children array
  const doc = parsed[1]["office:document-content"];
  const body = doc.find((n: any) => n["office:body"])["office:body"];
  const textArr = body.find((n: any) => n["office:text"])["office:text"];

  // Track state while walking
  let companyIndex = -1;
  let projectIndex = -1;
  let currentSection = "";

  for (let i = 0; i < textArr.length; i++) {
    const node = textArr[i];
    const tag = getTagName(node);
    const attrs = getAttrs(node);

    if (tag === "table:table" && CONFIG.odt.headerLayout !== "flat") {
      processHeaderTable(node);
      continue;
    }

    if (tag === "text:h") {
      const level = attrs["@_text:outline-level"];
      const text = getText(node);

      if (level === "1") {
        setText(node, "{{name}}");
        continue;
      }

      if (level === "2") {
        if (text.includes("Experience") || text.includes("Опыт работы")) {
          setText(node, "{{experience_heading}}");
          currentSection = "experience";
          companyIndex = -1;
        } else if (text.includes("Education") || text.includes("Образование")) {
          setText(node, "{{education.heading}}");
          currentSection = "education";
        } else if (text.includes("Skills") || text.includes("Навыки")) {
          setText(node, "{{skills_heading}}");
          currentSection = "skills";
        }
        continue;
      }

      if (level === "3") {
        if (text.includes("CAE TECHNOLOGY")) {
          companyIndex = 0;
          projectIndex = -1;
          replaceCompanyHeading(node, "companies.cae");
          continue;
        }
        if (text.includes("ITECHART GROUP")) {
          companyIndex = 1;
          projectIndex = -1;
          replaceCompanyHeading(node, "companies.itechart");
          continue;
        }
        if (text.includes("Open Source")) {
          currentSection = "open_source";
          setText(node, "{{open_source.heading}}");
          continue;
        }
      }

      if (level === "4") {
        if (text.includes("Sourceability")) {
          projectIndex = 0;
          replaceProjectHeading(node, "companies.cae.projects.sourceability");
          continue;
        }
        if (text.includes("Ernst")) {
          projectIndex = 0;
          replaceProjectHeading(node, "companies.itechart.projects.ey");
          continue;
        }
        if (text.includes("MPRE")) {
          projectIndex = 1;
          replaceProjectHeading(node, "companies.itechart.projects.mpre");
          continue;
        }
        if (text.includes("Raycast")) {
          projectIndex = 0;
          replaceProjectHeading(node, "open_source.raycast");
          continue;
        }
      }
    }

    if (tag === "text:p") {
      const text = getText(node);

      if (CONFIG.odt.headerLayout === "flat" && !currentSection) {
        if (text.includes("Belarus") || text.includes("Беларусь")) {
          setText(node, "{{location}}");
          continue;
        }
        if (text.includes("Software Engineer with 5+") || text.includes("Software Engineer с 5+")) {
          setText(node, "{{summary}}");
          continue;
        }
      }

      if (currentSection === "experience") {
        // Project-level paragraphs
        const projectKey = getProjectKey(companyIndex, projectIndex);
        if (projectKey) {
          if (text.startsWith("Stack:") || text.startsWith("Стек:")) {
            replaceLabelValueParagraph(node, "labels.stack", `${projectKey}.stack`, "Stack:");
            continue;
          }
          if (text.startsWith("Platform:") || text.startsWith("Платформа:")) {
            replaceLabelValueParagraph(node, "labels.platform", `${projectKey}.platform`, "Platform:");
            continue;
          }
          if (text.startsWith("Position:") || text.startsWith("Позиция:")) {
            replaceLabelValueParagraph(node, "labels.position", `${projectKey}.position`, "Position:");
            continue;
          }
          if (text.includes("Key Contributions") || text.includes("Ключевые достижения")) {
            replaceKeyContributionsParagraph(node);
            continue;
          }
          if (text.includes("Drove feature development")) {
            setText(node, "{{companies.cae.projects.sourceability.description}}");
            continue;
          }
          if (text.includes("Coordinated frontend")) {
            setText(node, "{{companies.itechart.projects.ey.description}}");
            continue;
          }
          if (text.includes("Engineered user interface")) {
            setText(node, "{{companies.itechart.projects.mpre.description}}");
            continue;
          }
        }
      }

      if (currentSection === "open_source") {
        if (text.startsWith("Stack:") || text.startsWith("Стек:")) {
          replaceLabelValueParagraph(node, "labels.stack", "open_source.raycast.stack", "Stack:");
          continue;
        }
        if (text.includes("Raycast is an open-source") || text.includes("Raycast — open-source")) {
          setText(node, "{{open_source.raycast.platform}}");
          continue;
        }
        if (text.includes("Contributed extensions") || text.includes("Вклад в расширения")) {
          replaceKeyContributionsParagraph(node, "labels.contributed_extensions");
          continue;
        }
      }

      if (currentSection === "education") {
        if (text.includes("University") || text.includes("Университет") || text.includes("Гомельский")) {
          replaceEducationParagraph(node);
          continue;
        }
      }
    }

    if (tag === "text:list") {
      const projectKey = getProjectKey(companyIndex, projectIndex);
      if (projectKey && currentSection === "experience") {
        replaceContributionsList(node, `${projectKey}.contributions`);
        continue;
      }
      if (currentSection === "open_source" && projectIndex === 0) {
        replaceContributionsList(node, "open_source.raycast.contributions");
        continue;
      }
    }
  }

  const rebuilt = buildContentXml(parsed);
  writeFileSync(resolve(tempDir, "content.xml"), rebuilt, "utf-8");
  repackOdt(tempDir, ODT_TEMPLATE);
  rmSync(tempDir, { recursive: true, force: true });

  console.log("Template prepared:", ODT_TEMPLATE);
}

function processHeaderTable(tableNode: unknown): void {
  walk(getChildren(tableNode), (node) => {
    const tag = getTagName(node);
    if (tag === "text:h") {
      const text = getText(node);
      if (text.includes("Aliaksandr Zhebit")) {
        setText(node, "{{name}}");
      }
    }
    if (tag === "text:p") {
      const text = getText(node);
      if (text.includes("Belarus, Gomel") || text.includes("Беларусь, Гомель")) {
        setText(node, "{{location}}");
      }
      if (text.includes("Software Engineer with 5+") || text.includes("Software Engineer с 5+")) {
        setText(node, "{{summary}}");
      }
    }
  });
}

function getProjectKey(companyIndex: number, projectIndex: number): string | null {
  const companies = ["cae", "itechart"];
  const projects: Record<string, string[]> = {
    cae: ["sourceability"],
    itechart: ["ey", "mpre"],
  };
  const company = companies[companyIndex];
  if (!company) return null;
  const proj = projects[company]?.[projectIndex];
  if (!proj) return null;
  return `companies.${company}.projects.${proj}`;
}

function replaceCompanyHeading(node: unknown, key: string): void {
  const children = getChildren(node);
  const newChildren: unknown[] = [];
  let dateSpanAdded = false;
  for (const child of children) {
    if (isTextNode(child)) {
      const text = child["#text"];
      if (text.trim()) {
        newChildren.push({ "#text": `{{${key}.name}} ` });
      }
    } else if (getTagName(child) === "text:span") {
      const spanText = getText(child);
      // Only use spans containing date-like text (has digits)
      if (!dateSpanAdded && /\d/.test(spanText)) {
        const attrs = getAttrs(child);
        newChildren.push({
          "text:span": [{ "#text": `{{${key}.dates}}` }],
          ":@": { "@_text:style-name": attrs["@_text:style-name"] },
        });
        dateSpanAdded = true;
      }
    } else {
      newChildren.push(cloneNode(child));
    }
  }
  (node as Record<string, unknown>)["text:h"] = newChildren;
}

function replaceProjectHeading(node: unknown, key: string): void {
  const children = getChildren(node);
  const newChildren: unknown[] = [];
  let dateSpanAdded = false;
  for (const child of children) {
    if (isTextNode(child)) {
      const text = child["#text"];
      if (text.trim()) {
        newChildren.push({ "#text": `{{${key}.name}} ` });
      }
    } else if (getTagName(child) === "text:span") {
      if (!dateSpanAdded) {
        const attrs = getAttrs(child);
        newChildren.push({
          "text:span": [{ "#text": `{{${key}.dates}}` }],
          ":@": { "@_text:style-name": attrs["@_text:style-name"] },
        });
        dateSpanAdded = true;
      }
    } else {
      newChildren.push(cloneNode(child));
    }
  }
  (node as Record<string, unknown>)["text:h"] = newChildren;
}

function replaceLabelValueParagraph(
  node: unknown,
  labelKey: string,
  valueKey: string,
  _labelPrefix: string
): void {
  // Standardize to bold label (T5) + normal value (T8) regardless of original formatting.
  // T5 = fo:font-weight="bold", T8 = fo:font-weight="normal" from auto-styles.
  const newChildren: unknown[] = [
    {
      "text:span": [{ "#text": `{{${labelKey}}}: ` }],
      ":@": { "@_text:style-name": "T5" },
    },
    {
      "text:span": [{ "#text": `{{${valueKey}}}` }],
      ":@": { "@_text:style-name": "T8" },
    },
  ];

  const tag = getTagName(node);
  if (tag) (node as Record<string, unknown>)[tag] = newChildren;
}

function replaceKeyContributionsParagraph(
  node: unknown,
  labelKey = "labels.key_contributions"
): void {
  const children = getChildren(node);
  const newChildren: unknown[] = [];
  for (const child of children) {
    if (isTextNode(child)) {
      newChildren.push({ "#text": `{{${labelKey}}}` });
    } else if (getTagName(child) === "text:span") {
      const attrs = getAttrs(child);
      newChildren.push({
        "text:span": [{ "#text": `{{${labelKey}}}` }],
        ":@": { "@_text:style-name": attrs["@_text:style-name"] },
      });
    }
  }
  const tag = getTagName(node);
  if (tag) (node as Record<string, unknown>)[tag] = newChildren;
}

function replaceEducationParagraph(node: unknown): void {
  const children = getChildren(node);
  const newChildren: unknown[] = [];

  for (const child of children) {
    if (isTextNode(child)) {
      const text = child["#text"];
      if (text.trim()) {
        newChildren.push({
          "#text": "{{education.university_name}} ",
        });
      }
    } else if (getTagName(child) === "text:span") {
      const spanText = getText(child);
      const attrs = getAttrs(child);
      // Only replace spans containing date-like text; preserve space-only spans
      if (/\d/.test(spanText)) {
        newChildren.push({
          "text:span": [{ "#text": "{{education.university_dates}}" }],
          ":@": { "@_text:style-name": attrs["@_text:style-name"] },
        });
      } else {
        // Preserve space or other non-date spans as-is
        newChildren.push(cloneNode(child));
      }
    }
  }
  (node as Record<string, unknown>)["text:p"] = newChildren;
}

function replaceContributionsList(listNode: unknown, key: string): void {
  const children = getChildren(listNode);
  if (children.length === 0) return;
  const firstItem = children[0];
  const firstItemChildren = getChildren(firstItem);
  if (firstItemChildren.length === 0) return;
  const firstP = firstItemChildren[0];

  if (key === "open_source.raycast.contributions") {
    const pTag = getTagName(firstP);
    if (pTag) {
      (firstP as Record<string, unknown>)[pTag] = [
        {
          "text:span": [{ "#text": `{{${key}.name}}` }],
          ":@": { "@_text:style-name": "T6" },
        },
        {
          "text:span": [{ "#text": ` ({{${key}.downloads}})` }],
          ":@": { "@_text:style-name": "T6" },
        },
        { "#text": `: {{${key}.desc}}` },
      ];
    }
  } else {
    setText(firstP, `{{${key}}}`);
  }

  (listNode as Record<string, unknown>)["text:list"] = [firstItem];
}

prepareTemplate();
