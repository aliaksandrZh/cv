const Exp = () => (
  <main className="container mx-auto flex border-t-4 border-black pt-10">
    <section className="w-3/12 pr-5">
      <div>
        <h3>Education</h3>
        <h4 className="mt-3 text-justify">
          Francisk Skorina Gomel State University
        </h4>
        <h5>Bachelor`s Degree</h5>
        <h6>2015 - 2019</h6>
      </div>

      <div className="mt-7">
        <h3>Experience</h3>
        <h4 className="mt-3">iTechArt Group</h4>
        <h5>Software Engineer</h5>
        <h6 className="mt-1">2020-2023</h6>
        <ul>
          <li>
            Developed and maintained web applications using technologies such as
            JavaScript, TypeScript, .Net, React, Angular, NodeJS, and SQL.
          </li>
          <li>
            Collaborated with cross-functional teams to deliver high-quality
            software solutions.
          </li>
          <li>
            Participated in code reviews, troubleshooting, and optimization
            efforts to improve application performance and reliability.
          </li>
        </ul>
      </div>

      <div className="mt-7">
        <h3>Expertise</h3>
        {/* <h4 className="mt-3">iTechArt Group</h4>
        <h5>Software Engineer</h5>
        <h6 className="mt-1">2020-2023</h6> */}
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>SQL</li>
          <li>C#</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </div>
    </section>
    <section className="w-3/4 border-l-4 border-black pl-10">
      <section>
        <h3>About Me</h3>
        <p className="mt-3 text-justify">
          Experienced software engineer with a background in web development.
          Possesses 3+ years of industry experience with expertise in frontend
          and full-stack development. Recently returned to the workforce after a
          year-long break and eager to leverage skills and knowledge to
          contribute to innovative projects.
        </p>
      </section>
      <section className="mt-7">
        <h3>Projects</h3>
        <article className="mt-5">
          <h4>Ernst & Young (EY) Raptor</h4>
          <h5>Lead Frontend / Full-Stack Engineer</h5>
          <h6 className="">2021 - 2023</h6>
          <p className="mt-2 text-justify">
            Ernst & Young (EY) Raptor refers to a secure, cloud-based technology
            platform known as the EY Global Tax Platform (GTP). This platform
            integrates various data sources and provides advanced analytics,
            dashboards, and reporting capabilities to offer end-to-end finance
            and tax visibility and compliance solutions. The GTP is designed to
            help organizations manage their tax functions more effectively by
            leveraging data and technology to transform, grow, and operate
            efficiently.
          </p>
          <h6 className="mt-2 font-bold">Key Contributions and Achievements</h6>
          <ul>
            <li>
              Spearheaded the frontend development efforts as Lead Engineer,
              overseeing the design, development, and optimization of modular
              and reusable components.
            </li>
            <li>
              Designed and implemented feature modules with intricate logic and
              interceptors, ensuring seamless user experiences across different
              versions of the application.
            </li>
            <li>
              Improved application performance and responsiveness through
              optimization techniques, resulting in a 20% increase in
              application responsiveness and a 30% reduction in development
              time.
            </li>
            <li>
              Conducted extensive codebase cleanups, enhancing code quality and
              reducing technical debt, leading to improved maintainability and
              scalability.
            </li>
            <li>
              Increased test coverage from 30% to 70%, ensuring robustness and
              reliability of the application.
            </li>
            <li>
              Played a pivotal role in supporting and enhancing the Micro
              Frontend (MFE) system, including chunk generation, lazy loading,
              and resolving critical issues.
            </li>
            <li>
              Mentored UI developers from other teams, fostering a culture of
              continuous learning and knowledge sharing.
            </li>
            <li>
              Provided basic DevOps support, including managing variables,
              restarting pods, and optimizing Git flow with pre-push hooks.
            </li>
            <li>
              Proactively identified and resolved production issues, ensuring
              smooth operation of applications and minimizing downtime.
            </li>
            <li>
              Contributed to the development of new endpoints, tables, and
              migrations, addressing critical business needs and supporting
              import/export functionalities.
            </li>
          </ul>
        </article>
        <article className="mt-7">
          <h4>MPRE</h4>
          <h5>Frontend Engineer</h5>
          <h6 className="">2020 - 2021</h6>
          <p className="mt-2 text-justify">
            MPRE is a Swiss company specializing in mortgage and real estate
            services. The platform integrates property search, valuation, and
            financing solutions, utilizing advanced data analytics to offer
            personalized, transparent, and efficient real estate management
            tools, supporting users throughout the property lifecycle.
          </p>
          <h6 className="mt-2 font-bold">Key Contributions and Achievements</h6>
          <ul>
            <li>
              Led the frontend development efforts, collaborating closely with
              cross-functional teams to deliver end-to-end solutions.
            </li>
            <li>
              Enhanced user interface and scalability of the platform using
              Angular, Angular Material, and ChartJs, resulting in a more
              intuitive and efficient user experience.
            </li>
            <li>
              Integrated Google APIs, including Google Maps, Google Streetview,
              and Google Analytics, to provide enhanced functionality and user
              insights.
            </li>
            <li>Refactored and redesigned the source code.</li>
          </ul>
        </article>

        <article className="mt-7">
          <h4>Raycast</h4>
          <h5>Opensource</h5>
          <h6 className="">2024</h6>
          <p className="mt-2 text-justify">
            A collection of powerful productivity tools all within an extendable
            launcher.
          </p>
          <h5 className="mt-2 font-bold">Extensions: </h5>
          <ul>
            <li>
              <span className="text-lg font-bold">Speedtest</span>
              <ul className="pl-5">
                <li>
                  TODO:REPHRASE Enabling users to quickly test their internet
                  speed directly from the Raycast app.
                </li>
                <li>50k+ downloads</li>
              </ul>
            </li>

            <li>
              <span className="text-lg font-bold">ConsoleDev</span>
              <ul className="pl-5">
                <li>
                  TODO:REPHRASE Facilitating developer`s workflow by providing
                  quick access to news.
                </li>
                <li>1.5k+ downloads</li>
              </ul>
            </li>

            <li>
              <span className="text-lg font-bold">
                Toggle Audio Input (Microphones)
              </span>
              <ul className="pl-5">
                <li>
                  he extension has a command to directly mute/unmute the audio
                  input, but there`s also a menu bar extension showing if it`s
                  either muted or not, and lets you click on the menu item to
                  toggle its state.
                </li>
                <li>1k+ downloads</li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </section>
  </main>
);

export default Exp;
