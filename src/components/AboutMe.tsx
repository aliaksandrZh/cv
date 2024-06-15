import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const AboutMe = () => (
  <HoverAnimationItemWrapper>
    <div>
      <h3 className="text-title">About Me</h3>
      <p className="mt-3 text-justify">
        Experienced software engineer with a background in{" "}
        <span className="font-bold">web development</span>. Possesses 3+ years
        of industry experience with expertise in frontend and full-stack
        development. Recently returned to the workforce after a year-long break
        and eager to leverage skills and knowledge to contribute to innovative
        projects.
      </p>
    </div>
  </HoverAnimationItemWrapper>
);
