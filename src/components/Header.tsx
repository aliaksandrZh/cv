import AvatarImage from "/aliaksandr-zhebit.png";
import { GitHubIcon } from "../assets/images/GithubIcon";
import { LinkedInIcon } from "../assets/images/LinkedinIcon";
import { MailIcon } from "../assets/images/MailIcon";
import { expertise } from "../libs/expertise";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";
import { TypedText } from "./ui/TypedText";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="container mx-auto border-b-2 border-title pt-5">
      <div className="flex flex-col p-5 sm:flex-row sm:items-center">
        <div className="flex items-center justify-center lg:w-3/12">
          <img
            src={AvatarImage}
            alt="avatar"
            className="rounded-full shadow-2xl dark:bg-title"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col sm:pl-5 lg:w-3/4">
          <h1 className="mt-5 text-center text-5xl font-bold text-title sm:text-left md:mt-0">
            {t("name")}
          </h1>
          <h2 className="mt-5 h-10 text-center text-3xl sm:text-left">
            <TypedText words={expertise} />
          </h2>

          <div className="mt-5 flex flex-wrap lg:flex-nowrap">
            <HoverAnimationItemWrapper className="flex basis-1/2 justify-center sm:justify-start md:basis-auto">
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/aliaksandr-zhebit-65489b272/"
                target="_blank"
              >
                <span className="min-w- flex min-w-32 items-center gap-2">
                  <LinkedInIcon width={25} height={25} />
                  Linked In
                </span>
              </a>
            </HoverAnimationItemWrapper>
            <HoverAnimationItemWrapper className="flex min-w-32 basis-1/2 justify-center sm:justify-start md:ml-5 md:basis-auto">
              <a
                className="cursor-pointer"
                target="_blank"
                href="https://github.com/aliaksandrZh"
              >
                <span className="flex items-center gap-2">
                  <GitHubIcon width={25} height={25} />
                  GitHub
                </span>
              </a>
            </HoverAnimationItemWrapper>
            <HoverAnimationItemWrapper className="mt-5 flex basis-full justify-center sm:justify-start md:basis-auto lg:ml-5 lg:mt-0">
              <a
                className="cursor-pointer"
                href="mailto:aliaksandr.zhebit@gmail.com"
              >
                <span className="flex items-center gap-2">
                  <MailIcon width={25} height={25} />
                  aliaksandr.zhebit@gmail.com
                </span>
              </a>
            </HoverAnimationItemWrapper>
          </div>
        </div>
      </div>
    </header>
  );
};
