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
  attribute: Record<string, boolean>;
}>(null!);

export const useHover = () => {
  return useContext(AnimationContext);
};

const AnimationContextWrapper = (props: {
  children: JSX.Element | JSX.Element[];
  itemIdentifierAttribute: string;
}) => {
  const [rect, setRect] = useState<RectState>({});

  const handleMouseEnter = (e: any) => {
    const target = (e.target as HTMLElement).closest(
      `[${props.itemIdentifierAttribute}]`,
    ) as HTMLElement;

    if (!target) {
      return;
    }

    setRect({
      y: target.offsetTop - 10,
      x: target.offsetLeft - 10,
      width: target.clientWidth + 20,
      height: target.clientHeight + 20,
    });
  };
  const handleMouseLeave = () => {};

  return (
    <AnimationContext.Provider
      value={{
        attribute: { [props.itemIdentifierAttribute]: true },
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
