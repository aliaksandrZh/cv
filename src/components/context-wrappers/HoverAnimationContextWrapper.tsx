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
      y: e.currentTarget.offsetTop - 10,
      x: e.currentTarget.offsetLeft - 10,
      width: e.currentTarget.clientWidth + 20,
      height: e.currentTarget.clientHeight + 20,
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
