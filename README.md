# CV v2 (main-2026)

## Project Overview

Static multi-page personal CV for Aliaksandr Zhebit, built with **vanilla TypeScript + Vite** and deployed to GitHub Pages. Replaces the previous React SPA with a simpler, faster static site supporting English and Russian.

## Architecture

- **Build tool**: Vite (MPA mode)
- **Styling**: Tailwind CSS v3 + custom CSS modules
- **No framework**: Vanilla TypeScript, no React, no router
- **i18n**: Single template + pre-build generation. `src/template/index.html` with `{{dot.notation}}` placeholders is hydrated by `scripts/generate-html.ts` before Vite build, producing `en/index.html` and `ru/index.html`. Download options are generated dynamically at build time based on files present in `public/cv/`.
- **Deploy**: `gh-pages` branch via `npm run deploy`

## File Structure

```
cv/
├── index.html              # Root redirect → /cv/en/
├── en/index.html           # Generated English CV (do not edit directly)
├── ru/index.html           # Generated Russian CV (do not edit directly)
├── cv-config.json          # Pipeline configuration (ODT + Markdown + PDF + public copy)
├── cv_sources/
│   ├── cv2026.odt          # Source ODT (LibreOffice)
│   ├── cv2026-template.odt # Placeholder-bearing ODT template (generated)
│   ├── cv-template.md      # Placeholder-bearing Markdown template (manual)
│   └── sync/               # Generated outputs
│       ├── Aliaksandr.Zhebit.odt
│       ├── Aliaksandr.Zhebit.pdf
│       └── Aliaksandr.Zhebit.md
├── public/
│   ├── cv/                 # Generated CV files copied for web download
│   │   ├── Aliaksandr.Zhebit.pdf
│   │   └── Aliaksandr.Zhebit.md
├── scripts/
│   ├── generate-html.ts    # HTML i18n generator
│   ├── json-utils.ts       # Shared JSON merge / lang data loader
│   ├── odt-utils.ts        # ODT XML/ZIP helpers
│   ├── prepare-odt-template.ts  # One-time ODT template builder
│   ├── sync-odt.ts         # JSON → ODT hydrator
│   ├── sync-md.ts          # JSON → Markdown hydrator
│   ├── sync-pdf.ts         # ODT → PDF converter (LibreOffice headless)
│   └── copy-to-public.ts   # Copies synced files to public/ per cv-config.json
├── src/
│   ├── template/
│   │   └── index.html      # Single base template with {{dot.notation}} placeholders
│   ├── i18n/
│   │   ├── common.json     # Language-agnostic data (contacts, skills)
│   │   ├── en.json         # Nested English copy
│   │   └── ru.json         # Nested Russian copy
│   ├── main.ts             # Entry: imports all CSS + initializes modules
│   ├── theme.ts            # Dark/light toggle (OS default, localStorage persist)
│   ├── typewriter.ts       # RxJS-based expertise typewriter animation
│   ├── hover.ts            # Mouse-following highlight background
│   ├── download.ts         # Format select + href update
│   ├── lang.ts             # Active language indicator in nav
│   └── css/
│       ├── base.css        # Tailwind directives + body + base utilities
│       ├── theme.css       # CSS variables + dark overrides
│       ├── styles.css      # Nav, header, experience, skills, download
│       └── hover.css       # #hover-bg positioning
├── tailwind.config.ts
├── vite.config.ts          # MPA: main, en, ru inputs
└── package.json
```

## Sync Pipelines

All pipelines share the same source of truth: `src/i18n/{en,ru}.json` + `src/i18n/common.json`.

### ODT Sync

- **`cv-config.json`**: Central configuration for source/template paths, output directory, per-language filenames, and enable/disable flags.
- **`cv_sources/cv2026-template.odt`**: Placeholder-bearing ODT template generated once by `scripts/prepare-odt-template.ts`.
- **`scripts/odt-utils.ts`**: Shared XML/ZIP utilities.
- **`scripts/sync-odt.ts`**: Hydrates template with JSON.
- **Output**: `cv_sources/sync/Aliaksandr.Zhebit.odt`
- **Commands**:
  - `npm run odt:prepare` — regenerate template from configured source ODT
  - `npm run odt:sync` — regenerate enabled language ODTs

### Markdown Sync

- **`cv_sources/cv-template.md`**: Manual Markdown template with `{{dot.notation}}` placeholders.
- **`scripts/sync-md.ts`**: Hydrates template with JSON.
- **`scripts/json-utils.ts`**: Shared helper — `mergeDeep`, `readLangData(lang)`.
- **Output**: `cv_sources/sync/Aliaksandr.Zhebit.md`
- **Command**:
  - `npm run md:sync` — regenerate enabled language Markdown files

### PDF Sync

- **`scripts/sync-pdf.ts`**: Converts generated ODT to PDF via LibreOffice headless CLI.
- Requires LibreOffice installed (`soffice` at `/Applications/LibreOffice.app/Contents/MacOS/soffice` or standard Linux paths).
- **Output**: `cv_sources/sync/Aliaksandr.Zhebit.pdf`
- **Command**:
  - `npm run pdf:sync` — regenerate enabled language PDFs

### Copy to Public

- **`scripts/copy-to-public.ts`**: Copies synced files from `cv_sources/sync/` to `public/cv/` based on `public.copy` list in `cv-config.json`.
- Respects `enabled` flags per language.
- **Command**:
  - `npm run public:copy` — copy configured formats to `public/`

### Unified Sync

- **Command**:
  - `npm run cv:sync` — runs `odt:sync` + `md:sync` + `pdf:sync` in sequence

## Deployment

```bash
npm run cv:sync      # regenerate all synced artifacts
npm run public:copy  # copy configured files to public/
npm run build        # build Vite site
npm run deploy       # push dist to gh-pages branch
```

GitHub Pages serves from `gh-pages` branch. Base path is `/cv`.

## Notes

- Typed text is inside an `<h2>` with fixed `h-10` height to prevent layout shift.
- Theme uses `.dark` class on `<html>` + CSS custom properties.
- `lang.ts` marks active language by matching `/cv/{lang}/` in `href`.
- Download dropdown options are generated at build time by scanning `public/cv/`. Only existing files appear; missing configured formats are omitted.
- LibreOffice on macOS is typically at `/Applications/LibreOffice.app/Contents/MacOS/soffice` (not in PATH).
