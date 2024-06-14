import { GitHubIcon } from "@/assets/images/GithubIcon";
import { LinkedInIcon } from "@/assets/images/LinkedinIcon";
import { MailIcon } from "@/assets/images/MailIcon";
import AvatarImage from "@/assets/images/108681764.jpeg";
import { expertise } from "@/libs/expertise";
import Image from "next/image";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";
import { FlipWords } from "./ui/FlipWords";

export const Header = () => (
  <header className="container mx-auto border-b-2 border-black">
    <div className="flex flex-col p-5 sm:flex-row sm:items-center">
      <div className="flex items-center justify-center lg:w-3/12">
        <div className="rounded-full p-5 shadow-2xl">
          <Image
            src={AvatarImage}
            alt="avatar"
            height={250}
            className="rounded-full shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col sm:pl-5 lg:w-3/4">
        <h1 className="mt-5 text-center text-5xl font-bold sm:text-left md:mt-0">
          Aliaksandr Zhebit
        </h1>
        <h2 className="mt-2 py-5 text-center text-3xl sm:text-left">
          <FlipWords duration={1000} words={expertise} className="text-black" />
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
