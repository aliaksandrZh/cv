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
    const ext = filename.split(".").pop() || filename;
    link.href = `../cv/${filename}`;
    link.download = `Aliaksandr.Zhebit.${ext}`;
  };

  update();
  select.addEventListener("change", update);
};
