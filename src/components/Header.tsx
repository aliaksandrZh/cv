import GitHubIcon from "@/images/GithubIcon";
import LinkedInIcon from "@/images/LinkedinIcon";
import MailIcon from "@/images/MailIcon";
import AvatarImage from "@/images/108681764.jpeg";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { ListHoverEffect } from "./ui/list-hover-effect";

const Header = () => (
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
            <FlipWords
              duration={1000}
              words={[
                "JavaScript",
                "TypeScript",
                "Angular",
                "React",
                "Tailwind",
                "NodeJS",
                "SQL",
                "C#",
                "Git",
                "Docker",
              ]}
            />
          </h2>
        </div>
        <div className="flex items-center justify-start">
          <ListHoverEffect className="flex" rotation="horizontal">
            <span
              key="1"
              className="box-border flex items-center gap-5 p-4 pl-0"
            >
              <LinkedInIcon width={25} height={25} />
              Linked In
            </span>
            <span key="2" className="flex items-center gap-5 p-4">
              <GitHubIcon width={25} heigh={25} />
              GitHub
            </span>
            <span key="3" className="gap-5l flex items-center p-4">
              <MailIcon width={25} height={25} />
              aliaksandr.zhebit@gmail.com
            </span>
          </ListHoverEffect>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
