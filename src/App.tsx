import { HoverAnimationContextWrapper } from "./components/context-wrappers/HoverAnimationContextWrapper";
import { Header } from "./components/Header";
import { Exp } from "./components/Exp";
import { DownloadCV } from "./components/Download";
import { HoverAnimationBackground } from "./components/ui/HoverAnimationBackground";
import "./i18n";

function App() {
  return (
    <>
      <HoverAnimationContextWrapper itemIdentifierAttribute="data-hover-item">
        <div className="relative min-h-dvh">
          <Header />

          <Exp />

          <div
            className="container mx-auto flex justify-center"
            style={{ padding: "100px 0 200px 0" }}
          >
            <DownloadCV />
          </div>
          <HoverAnimationBackground bgIdentifierAttribute="app-level-hover-bg" />
        </div>
      </HoverAnimationContextWrapper>
    </>
  );
}

export default App;
