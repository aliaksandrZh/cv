import { useTranslation } from "next-i18next";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="text-title">{t("projects.title")}</h3>
      <article className="mt-7">
        <HoverAnimationItemWrapper>
          <h4 className="text-title">Ernst & Young (EY) Raptor</h4>
          <h5>{t("projects.ey.position")}</h5>
          <h6 className="">2021 - 2023</h6>
          <p className="mt-2 text-justify">{t("projects.ey.description")}</p>
          <h6 className="mt-2 font-bold">{t("projects.achievements")}</h6>
          <ul>
            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d1")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d2")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d3")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d4")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d5")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d6")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d7")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d8")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d9")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.ey.done.d10")}
            </li>
          </ul>
        </HoverAnimationItemWrapper>
      </article>
      <article className="mt-7">
        <HoverAnimationItemWrapper>
          <h4 className="text-title">MPRE</h4>
          <h5>{t("projects.mpre.position")}</h5>
          <h6 className="">2020 - 2021</h6>
          <p className="mt-2 text-justify">{t("projects.mpre.description")}</p>
          <h6 className="mt-2 font-bold">{t("projects.achievements")}</h6>
          <ul>
            <li className="hover-list-item-vertical">
              {t("projects.mpre.done.d1")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.mpre.done.d2")}
            </li>

            <li className="hover-list-item-vertical">
              {t("projects.mpre.done.d3")}
            </li>
            <li className="hover-list-item-vertical">
              {t("projects.mpre.done.d4")}
            </li>
          </ul>
        </HoverAnimationItemWrapper>
      </article>

      <article className="mt-7">
        <HoverAnimationItemWrapper>
          <div>
            <h4 className="text-title">Raycast</h4>
            <h5>{t("projects.raycast.position")}</h5>
            <h6 className="">2024</h6>
            <p className="mt-2 text-justify">
              {t("projects.raycast.description")}
            </p>
            <h5 className="mt-2 font-bold">
              {t("projects.raycast.extensions")}:{" "}
            </h5>

            <ul>
              <li>
                <ul>
                  <li className="hover-list-item-vertical text-lg font-bold">
                    Speedtest
                  </li>
                  <li className="hover-list-item-vertical pl-5">
                    {t("projects.raycast.done.d1")}
                  </li>
                  <li className="hover-list-item-vertical pl-5">
                    <b>50k+</b> {t("projects.raycast.downloads")}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="hover-list-item-vertical text-lg font-bold">
                    ConsoleDev
                  </li>
                  <li className="hover-list-item-vertical pl-5">
                    {t("projects.raycast.done.d2")}
                  </li>
                  <li className="hover-list-item-vertical pl-5">
                    <b>1k+</b> {t("projects.raycast.downloads")}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="hover-list-item-vertical text-lg font-bold">
                    Toggle Audio Input (Microphones)
                  </li>
                  <li className="hover-list-item-vertical pl-5">
                    {t("projects.raycast.done.d3")}
                  </li>
                  <li className="hover-list-item-vertical pl-5">
                    <b>1.5k+</b> {t("projects.raycast.downloads")}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </HoverAnimationItemWrapper>
      </article>
    </>
  );
};
