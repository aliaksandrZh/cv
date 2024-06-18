import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  className,
  skeletonClassName,
}: {
  src: any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  skeletonClassName?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton
          className={cn(
            "absolute left-0 top-0 h-full w-full transition-all",
            skeletonClassName
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        className={cn(
          isLoading ? "opacity-0" : "opacity-100",
          "w-full transition-all",
          className
        )}
      />
    </div>
  );
};
