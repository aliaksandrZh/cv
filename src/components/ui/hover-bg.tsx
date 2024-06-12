import { useHover } from "@/hooks/cv-context";
import React, { useEffect, useState } from "react";

const HoverBackground = () => {
  const [style, setStyle] = useState<any>({ transform: "scale(0)" });
  const { stream } = useHover();

  useEffect(() => {
    const subscription = stream?.subscribe((rect) => {
      if (rect) {
        setStyle({
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          top: `${rect.y}px`,
          left: `${rect.x}px`,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [stream]);

  return (
    <div
      style={style}
      className="absolute bg-yellow transition-all duration-[0.4s] ease-[ease-in-out]"
    />
  );
};

export default HoverBackground;
