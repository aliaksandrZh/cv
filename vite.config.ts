import { resolve } from "path";
import { defineConfig, type Plugin } from "vite";
import { generateHtml } from "./scripts/generate-html";

function i18nPlugin(): Plugin {
  return {
    name: "i18n-generator",
    buildStart() {
      generateHtml();
    },
    configureServer(server) {
      const watchedPaths = [
        resolve(process.cwd(), "src/template/index.html"),
        resolve(process.cwd(), "src/i18n/en.json"),
        resolve(process.cwd(), "src/i18n/ru.json"),
      ];

      for (const p of watchedPaths) {
        server.watcher.add(p);
      }

      server.watcher.on("change", (file) => {
        if (
          file.includes("src/template/") ||
          file.includes("src/i18n/")
        ) {
          generateHtml();
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

export default defineConfig({
  base: "/cv",
  plugins: [i18nPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en/index.html"),
        ru: resolve(__dirname, "ru/index.html"),
      },
    },
  },
});
