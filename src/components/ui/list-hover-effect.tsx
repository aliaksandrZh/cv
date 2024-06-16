// TODO: drop?
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export const ListHoverEffect = ({
  children,
  className,
  rotation = "vertical",
}: {
  children: JSX.Element[];
  className?: string;
  rotation?: "vertical" | "horizontal";
}) => {
  const [y, setY] = useState<number>();
  const [size, setSize] = useState<number>();
  const [properties, setProperties] = useState({
    position: "top",
    targetSize: "clientHeight",
    size: "height",
    full: "w-full",
    offset: "top",
    offsetTarget: "offsetTop",
  });

  useEffect(() => {
    // if (rotation === "vertical") {
    //   setProperties({
    //     position: "top",
    //     targetSize: "clientHeight",
    //     size: "height",
    //     full: "w-full",
    //     offsetTarget: "offsetTop",
    //     offset: "top",
    //   });
    // }

    if (rotation === "horizontal") {
      setProperties({
        position: "left",
        targetSize: "clientWidth",
        size: "width",
        full: "h-full",
        offsetTarget: "offsetLeft",
        offset: "left",
      });
    }
  }, [rotation]);

  return (
    <ul className={cn("group cursor-default", className)}>
      {children.map((item, idx) => (
        <li className="hover-item" key={idx}>
          {item}
        </li>
      ))}
      <span
        className={cn(
          "absolute -z-10 -mt-0 scale-x-0 rounded-xl bg-hover transition-all duration-[0.4s] ease-[ease-in-out] before:content-none group-hover:scale-x-105 group-hover:scale-y-125",
          properties.full,
        )}
        style={{
          [properties.offset]: y,
          [properties.size]: size,
        }}
      ></span>
    </ul>
  );
};
