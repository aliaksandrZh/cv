import { useHover } from "@/hooks/cv-context";
import React, { useEffect, useState } from "react";

type HoverBackgroundState =
  | {
      width: string;
      height: string;
      top: string;
      left: string;
    }
  | { transform: string };

const HoverBackground = () => {
  const [style, setStyle] = useState<HoverBackgroundState>({
    transform: "scale(0)",
  });
  const { rect } = useHover();

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
      style={style}
      className="absolute -z-10 rounded-2xl shadow-2xl transition-all duration-[0.4s] ease-[ease-in-out]"
    >
      <div className="h-full w-full rounded-2xl bg-yellow opacity-30" />
    </div>
  );
};

export default HoverBackground;
