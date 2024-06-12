import { createContext, useContext, useState } from "react";

export type RectState =
  | {
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {};

export const AnimationContext = createContext<{
  rect: RectState;
  handleMouseEnter: (e: any) => void;
  handleMouseLeave: () => void;
}>(null!);

export const useHover = () => {
  return useContext(AnimationContext);
};

const AnimationContextWrapper = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [rect, setRect] = useState<RectState>({});

  const handleMouseEnter = (e: any) => {
    const target = (e.target as HTMLElement).closest(
      "[data-hover-item]",
    ) as HTMLElement;

    setRect({
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
        rect,
        handleMouseLeave,
        handleMouseEnter,
      }}
    >
      <div className="relative">{props.children}</div>
    </AnimationContext.Provider>
  );
};

export default AnimationContextWrapper;
