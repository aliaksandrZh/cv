import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const Experience = (props: { className?: string }) => (
  <HoverAnimationItemWrapper className={props.className}>
    <h3 className="text-title">Experience</h3>
    <h4 className="text-title mt-3">iTechArt Group</h4>
    <h5>Software Engineer</h5>
    <h6 className="mt-1">2020-2023</h6>
    <ul>
      <li className="hover-list-item-vertical">
        Developed and maintained web applications using technologies such as
        JavaScript, TypeScript, .Net, React, Angular, NodeJS, and SQL.
      </li>
      <li className="hover-list-item-vertical">
        Collaborated with cross-functional teams to deliver high-quality
        software solutions.
      </li>
      <li className="hover-list-item-vertical">
        Participated in code reviews, troubleshooting, and optimization efforts
        to improve application performance and reliability.
      </li>
    </ul>
  </HoverAnimationItemWrapper>
);
