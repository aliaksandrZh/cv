import { createContext, useContext } from "react";
import { Subject } from "rxjs";

export const AnimationContext = createContext<{
  stream: Subject<any>;
  handleMouseEnter: (e: any) => void;
  handleMouseLeave: () => void;
}>(null!);

export const useHover = () => {
  return useContext(AnimationContext);
};

const AnimationContextWrapper = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const hoverSubject = new Subject();

  const handleMouseEnter = (e: any) => {
    const target = (e.target as HTMLElement).closest(
      ".test-hover-item",
    ) as HTMLElement;

    hoverSubject.next({
      y: target.offsetTop,
      x: target.offsetLeft,
      width: target.clientWidth,
      height: target.clientHeight,
    });
  };
  const handleMouseLeave = () => {};

  return (
    <AnimationContext.Provider
      value={{
        stream: hoverSubject,
        handleMouseLeave,
        handleMouseEnter,
      }}
    >
      <div className="relative">{props.children}</div>
    </AnimationContext.Provider>
  );
};

export default AnimationContextWrapper;
