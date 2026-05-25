export const initLang = (): void => {
  const lang = document.documentElement.lang;
  const links = document.querySelectorAll(".lang-switcher a");

  links.forEach((a) => {
    const href = (a as HTMLAnchorElement).getAttribute("href");
    if (!href) return;

    if (href.includes(`/cv/${lang}/`)) {
      a.classList.add("lang-active");
      a.setAttribute("aria-current", "page");
    }
  });
};
