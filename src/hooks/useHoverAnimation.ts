import { HoverAnimationContext } from "@/contexts/HoverAnimationContext";
import { useContext } from "react";

export const useHoverAnimation = () => {
  return useContext(HoverAnimationContext);
};
