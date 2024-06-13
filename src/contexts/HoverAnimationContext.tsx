import { MouseEvent, createContext } from "react";

export type RectState = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type AnimationContextProvider = {
  rect: RectState;
  handleMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  handleMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  attribute: Record<string, boolean>;
};

export const HoverAnimationContext = createContext<{
  rect: RectState;
  handleMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  handleMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  attribute: Record<string, boolean>;
}>({} as AnimationContextProvider);
