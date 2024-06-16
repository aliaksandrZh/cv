import { AboutMe } from "./AboutMe";
import { Certificates } from "./Certificates";
import { DownloadCV } from "./Download";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Expertise } from "./Expertise";
import { Projects } from "./Projects";

export const Exp = () => {
  return (
    <main className="main-grid container mx-auto mt-10">
      <section className="p-5">
        <AboutMe />
      </section>
      <section className="p-5">
        <Experience />
      </section>
      <section className="p-5">
        <Projects />
      </section>
      <section className="border-title p-5 md:border-r-2">
        <Expertise />
      </section>
      <section className="border-title p-5 md:border-r-2">
        <DownloadCV
          href="/Aliaksandr.Zhebit.pdf"
          download="Aliaksandr.Zhebit.Web.Dev.pdf"
          className="sticky top-1/4 text-center lg:text-left"
          text="Download CV.pdf"
        />
        <DownloadCV
          href="/Aliaksandr.Zhebit.docx"
          download="Aliaksandr.Zhebit.Web.Dev.docx"
          text="Download CV.docx"
          className="sticky top-1/3 mt-5 text-center lg:text-left"
        />
        {/* <Certificates /> */}
      </section>
      <section className="border-title p-5 md:border-r-2">
        <Education />
      </section>
    </main>
  );
};
