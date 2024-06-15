import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const DownloadCV = () => {
  return (
    <HoverAnimationItemWrapper>
      <a href="/Aliaksandr.Zhebit.pdf" download>
        <button className="rounded-2xl bg-yellow px-12 py-3 shadow-lg transition-all hover:scale-105 active:scale-90 sm:px-20 sm:py-5">
          Download CV.pdf
        </button>
      </a>
    </HoverAnimationItemWrapper>
  );
};
