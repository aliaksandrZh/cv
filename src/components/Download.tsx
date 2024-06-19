import { useTranslation } from "react-i18next";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";
import { useEffect, useState } from "react";

export const DownloadCV = ({ className }: { className?: string }) => {
  const [ext, setExt] = useState<"pdf" | "docx">("pdf");
  const [a, setA] = useState({
    href: `./Aliaksandr.Zhebit.${ext}`,
    download: `Aliaksandr.Zhebit.Web.Dev.${ext}`,
  });
  useEffect(() => {
    setA({
      href: `./Aliaksandr.Zhebit.${ext}`,
      download: `Aliaksandr.Zhebit.Web.Dev.${ext}`,
    });
  }, [ext]);
  const { t } = useTranslation();
  return (
    <HoverAnimationItemWrapper className={className}>
      <div className="flex">
        <a
          className="block h-full bg-title shadow-lg"
          href={a.href}
          download={a.download}
        >
          <button className="bg-title py-3 pl-12 pr-3 text-[var(--bg-2)] transition-all hover:scale-105 active:scale-90 sm:py-5 sm:pl-20">
            {t("download.title")}
          </button>
        </a>
        <select
          aria-label="Select extension"
          value={ext}
          className="bg-[var(--title-light)] py-3 pl-1 pr-5 text-[var(--bg-2)] transition-all hover:scale-105 active:scale-90 sm:py-5"
          onChange={(e) => setExt(e.currentTarget.value as "pdf" | "docx")}
        >
          <option value="pdf">.pdf</option>
          <option value="docx">.docx</option>
        </select>
      </div>
    </HoverAnimationItemWrapper>
  );
};
