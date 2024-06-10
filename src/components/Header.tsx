import GitHubIcon from "@/images/GithubIcon";
import LinkedInIcon from "@/images/LinkedinIcon";
import MailIcon from "@/images/MailIcon";
import AvatarImage from "@/images/108681764.jpeg";
import Image from "next/image";

const Header = () => (
  <header className="w-full flex justify-center mt-10">
    <div className="container py-10 flex items-center justify-between">
      <div className="w-3/12 rounded-full">
        <div className="p-5 w-fit mx-auto shadow-2xl rounded-full">
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
          <h2 className="text-3xl mt-2">Web Developer</h2>
        </div>
        <div className="flex items-center justify-start">
          <span className="pl-0 flex items-center p-5 gap-5">
            <LinkedInIcon width={25} height={25} />
            Linked In
          </span>
          <span className="flex items-center p-5 gap-5">
            <GitHubIcon width={25} heigh={25} />
            GitHub
          </span>
          <span className="flex items-center p-5 gap-5">
            <MailIcon width={25} height={25} />
            aliaksandr.zhebit@gmail.com
          </span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
