import { DownloadCV } from "@/components/Download";
import { Exp } from "@/components/Exp";
import { Header } from "@/components/Header";
import { HoverAnimationContextWrapper } from "@/components/context-wrappers/HoverAnimationContextWrapper";
import { HoverAnimationBackground } from "@/components/ui/HoverAnimationBackground";
import { cn } from "@/utils/cn";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
});

export default function Home() {
  return (
    <HoverAnimationContextWrapper itemIdentifierAttribute="data-hover-item">
      <div className={cn(roboto.className, "root-el relative min-h-dvh")}>
        <Header />

        <Exp />
        <div className="pb-32"></div>

        <div className="container mx-auto flex justify-center">
          <DownloadCV />
        </div>
        <div className="pb-96"></div>

        <HoverAnimationBackground bgIdentifierAttribute="app-level-hover-bg" />
      </div>
    </HoverAnimationContextWrapper>
  );
}
