import { expertise } from "../libs/expertise";
import { useTranslation } from 'react-i18next';
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const Expertise = () => {
  const { t } = useTranslation("common");
  return (
    <HoverAnimationItemWrapper>
      <h3 className="text-title">{t("expertise.title")}</h3>
      <ul className="flex flex-col flex-wrap xl:flex-row">
        {expertise.map((e) => (
          <li
            className="hover-list-item-vertical basis-auto xl:basis-1/2"
            key={e}
          >
            {e}
          </li>
        ))}
      </ul>
    </HoverAnimationItemWrapper>
  );
};
