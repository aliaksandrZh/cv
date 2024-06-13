import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import { cn } from "@/utils/cn";
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
  const [style, setStyle] = useState<HoverBackgroundState>({
    transform: "scale(0)",
  });
  const { rect } = useHoverAnimation();

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
      className="absolute -z-10 scale-x-[1.05] scale-y-[1.05] rounded-2xl shadow-2xl transition-all duration-[0.4s] ease-[ease-in-out]"
    >
      <div
        className={cn(
          "h-full w-full rounded-2xl bg-yellow opacity-30",
          props.className,
        )}
      />
    </div>
  );
};
