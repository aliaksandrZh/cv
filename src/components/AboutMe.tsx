import { useTranslation } from 'react-i18next';
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <HoverAnimationItemWrapper>
      <div>
        <h3 className="text-title">{t("about.title")}</h3>
        <p className="mt-3 text-justify">
          {t("about.text.first")}{" "}
          <span className="font-bold">{t("about.target")}</span>.{" "}
          {t("about.text.second")}
        </p>
      </div>
    </HoverAnimationItemWrapper>
  );
};
