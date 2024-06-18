import { useTranslation } from "../hooks/useTranslation";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const Education = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <HoverAnimationItemWrapper>
        <h3>{t("education.title")}</h3>

        <h4 className="mt-3 text-title">{t("education.degree")}</h4>
        <h5 className="text-justify text-title">{t("education.university")}</h5>
        <h6>2015 - 2019</h6>
      </HoverAnimationItemWrapper>
    </div>
  );
};
