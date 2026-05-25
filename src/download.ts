export const initDownload = (): void => {
  const link = document.getElementById("download-link") as
    | HTMLAnchorElement
    | undefined;
  const select = document.getElementById("download-ext") as
    | HTMLSelectElement
    | undefined;
  if (!link || !select) return;

  const update = () => {
    const ext = select.value as "pdf" | "docx";
    link.href = `../Aliaksandr.Zhebit.${ext}`;
    link.download = `Aliaksandr.Zhebit.Web.Dev.${ext}`;
  };

  update();
  select.addEventListener("change", update);
};
