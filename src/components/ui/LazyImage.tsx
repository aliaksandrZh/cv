import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Skeleton } from "./Skeleton";

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
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
        <Skeleton className="absolute left-0 top-0 h-full w-full" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        className={cn(
          isLoading ? "opacity-0" : "opacity-100",
          "transition-all",
          className,
        )}
      />
    </div>
  );
};
