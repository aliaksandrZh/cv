import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const DownloadCV = ({
  className,
  href,
  download,
  text,
}: {
  className?: string;
  href: string;
  download: string;
  text: string;
}) => {
  return (
    <HoverAnimationItemWrapper className={className}>
      <a href={href} download={download}>
        <button className="bg-title px-12 py-3 text-white shadow-lg transition-all hover:scale-105 active:scale-90 sm:px-20 sm:py-5">
          {text}
        </button>
      </a>
    </HoverAnimationItemWrapper>
  );
};
