import { Certificate } from "@/data/certificates";
import { useHover } from "@/hooks/cv-context";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const CertificatePreview = ({
  // target,
  data,
}: {
  // target?: HTMLElement;
  data?: Certificate;
}) => {
  const [fullMode, setFullMode] = useState(false);
  const [style, setStyle] = useState<string>("w-[14%] translate-x-full");
  const { rect } = useHover();

  useEffect(() => {
    console.log(fullMode);
    if (fullMode) {
      setStyle("w-[60%]");
      // setTimeout(() => {
      //   setStyle((s) => s + " translate-x-1/4");
      // }, 2000);
    } else {
      setStyle("w-[14%] translate-x-full");
    }
  }, [fullMode]);
  return (
    <AnimatePresence>
      {rect && data && (
        <motion.div
          id="oops"
          onClick={() => {
            console.log("div");
            setFullMode((s) => !s);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "bg-blue absolute z-10 max-h-fit -translate-y-1/2 cursor-pointer rounded-2xl p-5 shadow-2xl transition-all duration-[1s] ease-[ease-in-out]",
            // fullMode ? "w-[60%] translate-x-1/4" : "w-[14%] translate-x-full",
            style,
          )}
          style={{
            top: rect.y,
            left: rect.x - 100,
          }}
        >
          {/* TODO: The image height should change smoothly */}
          <div className="h-full w-full">
            <Image
              src={data.img}
              alt="certificate"
              onClick={(e) => {
                e.stopPropagation();
                console.log("img");
                setFullMode((s) => !s);
              }}
              className="max-h-[1000px] rounded-2xl object-contain shadow-2xl"
            />
          </div>
          {/* </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificatePreview;
