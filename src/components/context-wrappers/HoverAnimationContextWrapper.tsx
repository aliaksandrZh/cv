import {
  HoverAnimationContext,
  RectState,
} from "../../contexts/HoverAnimationContext";
import { useMediaQueryRx } from "../../hooks/useMediaQuery";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useLazyEventHandler } from "../../hooks/useLazyEventHandler";

export const HoverAnimationContextWrapper = (props: {
  children: JSX.Element | JSX.Element[];
  itemIdentifierAttribute: string;
}) => {
  const isMediaQueryMatched = useMediaQueryRx();
  const [rect, setRect] = useState<RectState>({} as RectState);
  const { onEvent } = useLazyEventHandler<EventTarget & HTMLElement>(
    useCallback(
      (e) =>
        setRect({
          y: e.offsetTop,
          x: e.offsetLeft,
          width: e.clientWidth,
          height: e.clientHeight,
        }),
      [],
    ),
    50,
  );

  useEffect(() => {
    setRect({} as RectState);
  }, [isMediaQueryMatched]);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    onEvent(e.currentTarget);
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
      <div className="relative min-h-dvh">{props.children}</div>
    </HoverAnimationContext.Provider>
  );
};
