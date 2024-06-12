import { useHover } from "@/hooks/cv-context";
import { cn } from "@/utils/cn";
import React, { useEffect, useMemo, useState } from "react";

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

const HoverBackground = (props: HoverBackgroundProps) => {
  const [style, setStyle] = useState<HoverBackgroundState>({
    transform: "scale(0)",
  });
  const { rect } = useHover();
  // const attr = useMemo(() => {
  //   console.log("attr is calculated for", props.bgIdentifierAttribute);
  //   return {
  //     [props.bgIdentifierAttribute]: true,
  //   };
  // }, [props.bgIdentifierAttribute]);

  useEffect(() => {
    // TODO: fix
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
      className="absolute -z-10 rounded-2xl shadow-2xl transition-all duration-[0.4s] ease-[ease-in-out]"
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

export default HoverBackground;
