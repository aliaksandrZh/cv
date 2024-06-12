import { Certificate } from "@/data/certificates";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const CertificatePreview = ({
  target,
  data,
}: {
  target?: HTMLElement;
  data?: Certificate;
}) => {
  return (
    <AnimatePresence>
      {target && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 z-10 max-h-fit w-full -translate-y-1/2 translate-x-full cursor-pointer rounded-2xl bg-white p-5 shadow-2xl transition-all duration-[1s] ease-[ease-in-out]"
          style={{
            top: target.offsetTop,
          }}
        >
          {/* TODO: The image height should change smoothly */}
          <div>
            <Image
              src={data.img}
              alt="certificate"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          {/* </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificatePreview;