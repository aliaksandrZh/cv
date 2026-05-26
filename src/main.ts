import "./css/base.css";
import "./css/theme.css";
import "./css/styles.css";

import { initTheme } from "./theme";
import { initDownload } from "./download";
import { initLang } from "./lang";

initTheme();
initDownload();
initLang();

const initStickyNav = (): void => {
  const sentinel = document.querySelector(".nav-sentinel");
  const nav = document.querySelector(".top-nav");
  if (!sentinel || !nav) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("is-stuck", !entry.isIntersecting);
    },
    { threshold: 0 },
  );

  observer.observe(sentinel);
};

initStickyNav();
