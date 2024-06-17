import { useTranslation } from "next-i18next";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const DownloadCV = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <HoverAnimationItemWrapper className={className}>
      <a
        href="./Aliaksandr.Zhebit.pdf"
        download="Aliaksandr.Zhebit.Web.Dev.pdf"
      >
        <button className="bg-title px-12 py-3 text-white shadow-lg transition-all hover:scale-105 active:scale-90 sm:px-20 sm:py-5">
          {t("download.title")}
        </button>
      </a>
    </HoverAnimationItemWrapper>
  );
};
