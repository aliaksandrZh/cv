import {
  HoverAnimationContext,
  RectState,
} from "@/contexts/HoverAnimationContext";
import { MouseEvent, useState } from "react";

export const HoverAnimationContextWrapper = (props: {
  children: JSX.Element | JSX.Element[];
  itemIdentifierAttribute: string;
}) => {
  const [rect, setRect] = useState<RectState>({} as RectState);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setRect({
      y: e.currentTarget.offsetTop,
      x: e.currentTarget.offsetLeft,
      width: e.currentTarget.clientWidth,
      height: e.currentTarget.clientHeight,
    });
  };
  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {};

  return (
    <HoverAnimationContext.Provider
      value={{
        attribute: { [props.itemIdentifierAttribute]: true },
        rect,
        handleMouseLeave,
        handleMouseEnter,
      }}
    >
      <div className="relative">{props.children}</div>
    </HoverAnimationContext.Provider>
  );
};
