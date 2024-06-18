import { useHoverAnimation } from "../../hooks/useHoverAnimation";
import { useWindowResize } from "../../hooks/useWindowReisze";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";

type HoverBackgroundState =
  | {
      width: string;
      height: string;
      top: string;
      left: string;
    }
  | { transform: string };

type HoverBackgroundProps = {
  bgIdentifierAttribute: string;
  className?: string;
};

export const HoverAnimationBackground = (props: HoverBackgroundProps) => {
  const resized = useWindowResize();
  const [style, setStyle] = useState<HoverBackgroundState>({
    transform: "scale(0)",
  });
  const { rect } = useHoverAnimation();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setStyle((s) => ({ transform: "scale(0)" }));
  }, [resized]);

  useEffect(() => {
    if ("width" in rect) {
      setStyle({
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.y}px`,
        left: `${rect.x}px`,
      });
    }
  }, [rect]);

  return (
    <div
      {...{ [props.bgIdentifierAttribute]: "" }}
      style={style}
      className="absolute -z-10 scale-x-[1.03] scale-y-[1.01] shadow-2xl transition-all duration-[0.4s] ease-[ease-in-out] sm:scale-y-[1.05]"
    >
      <div className={cn("bg-hover h-full w-full", props.className)} />
    </div>
  );
};
