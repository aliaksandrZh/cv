import Header from "@/components/Header";
import Exp from "@/components/Exp";
import { Inter, Roboto_Mono } from "next/font/google";
import AnimationContextWrapper from "@/hooks/cv-context";
import HoverBackground from "@/components/ui/hover-bg";

const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AnimationContextWrapper itemIdentifierAttribute="data-hover-item">
      <div className={roboto.className + " root-el relative min-h-dvh"}>
        <Header />
        <div className="container mx-auto mb-10"></div>

        <Exp />

        <div className="pb-96"></div>

        <HoverBackground bgIdentifierAttribute="app-level-hover-bg" />
      </div>
    </AnimationContextWrapper>
  );
}
