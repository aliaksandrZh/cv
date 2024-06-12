import { useHover } from "@/hooks/cv-context";
import { cn } from "@/utils/cn";

const HoverItemWrapper = ({
  className = "",
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}) => {
  const { handleMouseLeave, handleMouseEnter } = useHover();
  return (
    <div
      className={cn(className, "test-hover-item")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverItemWrapper;
