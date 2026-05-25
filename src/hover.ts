export const initHover = (): void => {
  const hoverBg = document.getElementById("hover-bg");
  if (!hoverBg) return;

  const handleMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const item = target.closest("[data-hover-item]") as HTMLElement | null;
    if (!item) return;

    const rect = item.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    hoverBg.style.width = `${rect.width}px`;
    hoverBg.style.height = `${rect.height}px`;
    hoverBg.style.top = `${rect.top + scrollY}px`;
    hoverBg.style.left = `${rect.left + scrollX}px`;
    hoverBg.style.transform = "scale(1.02)";
    hoverBg.style.opacity = "1";
  };

  const handleMouseOut = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const item = target.closest("[data-hover-item]") as HTMLElement | null;
    if (!item) return;

    hoverBg.style.transform = "scale(0)";
    hoverBg.style.opacity = "0";
  };

  const handleResize = () => {
    hoverBg.style.transform = "scale(0)";
    hoverBg.style.opacity = "0";
  };

  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseout", handleMouseOut);
  window.addEventListener("resize", handleResize);
};
