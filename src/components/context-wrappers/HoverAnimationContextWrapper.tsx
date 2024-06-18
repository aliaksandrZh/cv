import {
  HoverAnimationContext,
  RectState,
} from "../../contexts/HoverAnimationContext";
import { useMediaQueryRx } from "../../hooks/useMediaQuery";
import { MouseEvent, useEffect, useState } from "react";

export const HoverAnimationContextWrapper = (props: {
  children: JSX.Element | JSX.Element[];
  itemIdentifierAttribute: string;
}) => {
  const isMediaQueryMatched = useMediaQueryRx();
  const [rect, setRect] = useState<RectState>({} as RectState);

  useEffect(() => {
    setRect({} as RectState);
  }, [isMediaQueryMatched]);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setRect({
      y: e.currentTarget.offsetTop,
      x: e.currentTarget.offsetLeft,
      width: e.currentTarget.clientWidth,
      height: e.currentTarget.clientHeight,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
