import { expertise } from "@/libs/expertise";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";

export const Expertise = () => (
  <HoverAnimationItemWrapper>
    <h3 className="text-title">Expertise</h3>
    {/* <h4 className="mt-3">iTechArt Group</h4>
        <h5>Software Engineer</h5>
        <h6 className="mt-1">2020-2023</h6> */}
    <ul className="flex flex-row flex-wrap sm:flex-col">
      {expertise.map((e) => (
        <li
          className="hover-list-item-vertical basis-1/2 sm:basis-auto"
          key={e}
        >
          {e}
        </li>
      ))}
    </ul>
  </HoverAnimationItemWrapper>
);
