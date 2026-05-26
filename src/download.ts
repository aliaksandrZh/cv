export const initDownload = (): void => {
  const link = document.getElementById("download-link") as
    | HTMLAnchorElement
    | undefined;
  const select = document.getElementById("download-ext") as
    | HTMLSelectElement
    | undefined;
  if (!link || !select) return;

  const update = () => {
    const filename = select.value;
    if (!filename) {
      link.href = "#";
      link.removeAttribute("download");
      return;
    }
    link.href = `../cv/${filename}`;
    link.download = filename;
  };

  update();
  select.addEventListener("change", update);
};
