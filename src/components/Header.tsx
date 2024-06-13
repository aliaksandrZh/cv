import { GitHubIcon } from "@/assets/images/GithubIcon";
import { LinkedInIcon } from "@/assets/images/LinkedinIcon";
import { MailIcon } from "@/assets/images/MailIcon";
import AvatarImage from "@/assets/images/108681764.jpeg";
import { expertise } from "@/libs/expertise";
import Image from "next/image";
import { HoverAnimationItemWrapper } from "./ui/HoverItemAnimationWrapper";
import { FlipWords } from "./ui/FlipWords";

export const Header = () => (
  <header className="mt-10 flex w-full justify-center">
    <div className="container flex items-center justify-between py-10">
      <div className="w-3/12 rounded-full">
        <div className="mx-auto w-fit rounded-full p-5 shadow-2xl">
          <Image
            src={AvatarImage}
            alt="avatar"
            height={250}
            className="mx-auto rounded-full shadow-2xl"
          />
        </div>
      </div>

      <div className="w-3/4 pl-10">
        <div>
          <h1 className="text-5xl font-bold">Aliaksandr Zhebit</h1>
          <h2 className="mt-2 text-3xl">
            <FlipWords duration={1000} words={expertise} />
          </h2>
        </div>
        <div className="flex items-center justify-start">
          <HoverAnimationItemWrapper>
            <span className="box-border flex items-center gap-5 p-4 pl-0">
              <LinkedInIcon width={25} height={25} />
              Linked In
            </span>
          </HoverAnimationItemWrapper>
          <HoverAnimationItemWrapper>
            <span className="flex items-center gap-5 p-4">
              <GitHubIcon width={25} heigh={25} />
              GitHub
            </span>
          </HoverAnimationItemWrapper>
          <HoverAnimationItemWrapper>
            <span className="gap-5l flex items-center p-4">
              <MailIcon width={25} height={25} />
              aliaksandr.zhebit@gmail.com
            </span>
          </HoverAnimationItemWrapper>
        </div>
      </div>
    </div>
  </header>
);
