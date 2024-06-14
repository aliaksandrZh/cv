import { AboutMe } from "./AboutMe";
import { Certificates } from "./Certificates";
import { Education } from "./Education";
import { Experience } from "./Experiense";
import { Expertise } from "./Expertise";
import { Projects } from "./Projects";

export const Exp = () => {
  return (
    <main className="container mx-auto flex border-t-4 border-black pt-10">
      <aside className="w-3/12 max-w-96 pr-5">
        <Education />

        <div className="mt-7">
          <Experience />
        </div>

        <div className="mt-7">
          <Expertise />
        </div>

        <div className="mt-7">
          <Certificates />
        </div>
      </aside>

      <section className="w-3/4 border-l-4 border-black pl-10">
        <section>
          <AboutMe />
        </section>

        <section className="mt-7">
          <Projects />
        </section>
      </section>
    </main>
  );
};
