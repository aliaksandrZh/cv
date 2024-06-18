import { useHoverAnimation } from "../../hooks/useHoverAnimation";

export const HoverAnimationItemWrapper = ({
  className = "",
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}) => {
  const { handleMouseLeave, handleMouseEnter, attribute } = useHoverAnimation();
  return (
    <div
      {...attribute}
      className={className}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {children}
    </div>
  );
};
