import { useHoverAnimation } from "../hooks/useHoverAnimation";
import { Certificate } from "../libs/certificates";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { LazyImage } from "./ui/LazyImage";

export const CertificatePreview = ({
  openModal,
  data,
}: {
  data: Certificate | null;
  openModal: () => void;
}) => {
  const { rect } = useHoverAnimation();

  return (
    <AnimatePresence>
      {rect && data && (
        <motion.div
          id="oops"
          onClick={() => openModal()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute z-10 max-h-fit w-80 cursor-pointer bg-hover p-2 shadow-2xl transition-all duration-[1s] ease-[ease-in-out]"
          )}
          style={{
            top: rect.y,
            left: rect.x,
            translateX: rect.width - 10,
            translateY: "-50%",
          }}
        >
          {/* TODO: The image height should change smoothly */}
          <div className="">
            <LazyImage
              src={data.img}
              alt={data.title}
              className="max-h-[1000px] object-contain"
            ></LazyImage>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
