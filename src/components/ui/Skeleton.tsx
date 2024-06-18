import { cn } from "../../utils/cn";

export const Skeleton = ({ className }: { className?: string }) => {
  return <div className={cn(className, "skeleton animate-loading")} />;
};
