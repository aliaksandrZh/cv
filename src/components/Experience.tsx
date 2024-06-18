import { useTranslation } from "react-i18next";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const Experience = (props: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <HoverAnimationItemWrapper className={props.className}>
      <h3 className="text-title">{t("experience.title")}</h3>
      <h4 className="mt-3 text-title">iTechArt Group</h4>
      <h5>{t("experience.position")}</h5>
      <h6 className="mt-1">2020-2023</h6>
      <ul>
        <li className="hover-list-item-vertical">{t("experience.done.d1")}</li>
        <li className="hover-list-item-vertical">{t("experience.done.d2")}</li>
        <li className="hover-list-item-vertical">{t("experience.done.d3")}</li>
      </ul>
    </HoverAnimationItemWrapper>
  );
};
