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
      <div className="flex items-center justify-center sm:w-3/12">
        <div className="rounded-full p-5 shadow-2xl">
          <Image
            src={AvatarImage}
            alt="avatar"
            height={250}
            className="rounded-full shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col sm:w-3/4 sm:pl-5">
        <h1 className="text-center text-5xl font-bold sm:text-left">
          Aliaksandr Zhebit
        </h1>
        <h2 className="mt-2 py-5 text-center text-3xl sm:text-left">
          <FlipWords duration={1000} words={expertise} className="text-black" />
        </h2>

        <div className="mt-5 flex flex-wrap sm:flex-nowrap sm:justify-start">
          <HoverAnimationItemWrapper className="flex basis-1/2 justify-center sm:basis-auto sm:justify-start">
            <span className="flex items-center gap-2">
              <LinkedInIcon width={25} height={25} />
              Linked In
            </span>
          </HoverAnimationItemWrapper>
          <HoverAnimationItemWrapper className="flex basis-1/2 justify-center sm:ml-5 sm:basis-auto sm:justify-start">
            <span className="flex items-center gap-2">
              <GitHubIcon width={25} height={25} />
              GitHub
            </span>
          </HoverAnimationItemWrapper>
          <HoverAnimationItemWrapper className="mt-5 flex basis-full justify-center sm:ml-5 sm:mt-0 sm:basis-auto sm:justify-start">
            <span className="flex items-center gap-2">
              <MailIcon width={25} height={25} />
              aliaksandr.zhebit@gmail.com
            </span>
          </HoverAnimationItemWrapper>
        </div>
      </div>
    </div>
  </header>
);
//   <header className="mt-10 flex w-full justify-center">
//     <div className="container flex items-center justify-between py-10">
//       <div className="w-3/12 rounded-full">
//         <div className="mx-auto w-fit rounded-full p-5 shadow-2xl">
//           <Image
//             src={AvatarImage}
//             alt="avatar"
//             height={250}
//             className="mx-auto rounded-full shadow-2xl"
//           />
//         </div>
//       </div>

//       <div className="w-3/4 pl-10">
// <div>
//   <h1 className="text-5xl font-bold">Aliaksandr Zhebit</h1>
//   <h2 className="mt-2 text-3xl">
//     <FlipWords duration={1000} words={expertise} />
//   </h2>
// </div>
// <div className="flex items-center justify-start">
//   <HoverAnimationItemWrapper>
//     <span className="box-border flex items-center gap-5 p-4 pl-0">
//       <LinkedInIcon width={25} height={25} />
//       Linked In
//     </span>
//   </HoverAnimationItemWrapper>
//   <HoverAnimationItemWrapper>
//     <span className="flex items-center gap-5 p-4">
//       <GitHubIcon width={25} height={25} />
//       GitHub
//     </span>
//   </HoverAnimationItemWrapper>
//   <HoverAnimationItemWrapper>
//     <span className="gap-5l flex items-center p-4">
//       <MailIcon width={25} height={25} />
//       aliaksandr.zhebit@gmail.com
//     </span>
//   </HoverAnimationItemWrapper>
// </div>
//       </div>
//     </div>
//   </header>
// );
