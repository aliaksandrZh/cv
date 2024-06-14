import { AboutMe } from "./AboutMe";
import { Certificates } from "./Certificates";
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
      <section className="border-black p-5 md:border-r-2">
        <Expertise />
      </section>
      <section className="border-black p-5 md:border-r-2">
        <Certificates />
      </section>
      <section className="border-black p-5 md:border-r-2">
        <Education />
      </section>
    </main>
  );
};
