import { Certificate } from "@/data/certificates";
import { useHover } from "@/hooks/cv-context";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const CertificatePreview = ({
  openModal,
  data,
}: {
  data: Certificate | null;
  openModal: () => void;
}) => {
  const { rect } = useHover();

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
            "absolute z-10 max-h-fit w-96 -translate-y-1/2 translate-x-full cursor-pointer rounded-2xl bg-gradient-to-t from-yellow to-white p-5 shadow-2xl transition-all duration-[1s] ease-[ease-in-out]",
          )}
          style={{
            top: rect.y,
            left: rect.x,
          }}
        >
          {/* TODO: The image height should change smoothly */}
          <div>
            <Image
              src={data.img}
              alt="certificate"
              className="max-h-[1000px] rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificatePreview;
