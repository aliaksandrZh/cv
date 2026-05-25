const STORAGE_KEY = "theme";
const DARK_CLASS = "dark";

const getSystemTheme = (): "dark" | "light" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getStoredTheme = (): "dark" | "light" | null => {
  try {
    return localStorage.getItem(STORAGE_KEY) as "dark" | "light" | null;
  } catch {
    return null;
  }
};

export const initTheme = (): void => {
  const stored = getStoredTheme();
  const theme = stored ?? getSystemTheme();

  if (theme === "dark") {
    document.documentElement.classList.add(DARK_CLASS);
  } else {
    document.documentElement.classList.remove(DARK_CLASS);
  }

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle(DARK_CLASS);
      try {
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
      } catch {
        /* ignore */
      }
    });
  }
};
