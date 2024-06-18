import { HoverAnimationContextWrapper } from "./components/context-wrappers/HoverAnimationContextWrapper";
import { Header } from "./components/Header";
import { Exp } from "./components/Exp";
import { DownloadCV } from "./components/Download";
import { HoverAnimationBackground } from "./components/ui/HoverAnimationBackground";
import { cn } from "./utils/cn";

function App() {
  return (
    <>
      <HoverAnimationContextWrapper itemIdentifierAttribute="data-hover-item">
        <div className={cn("root-el relative min-h-dvh")}>
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
    </>
  );
}

export default App;
