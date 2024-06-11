import Image from "next/image";
import { useState } from "react";
import { certificates } from "@/data/certificates";
import { ListHoverEffect } from "./ui/list-hover-effect";
import { AnimatePresence, motion } from "framer-motion";

const Certificates = () => {
  const [[preview, data], setPreview] = useState([]);

  return (
    <div>
      <h3>Certificates</h3>
      <ul className="group relative" onMouseLeave={(e) => setPreview([])}>
        <ListHoverEffect>
          {certificates.map((c) => (
            <li
              key={c.title}
              className="hover-list-item-vertical text-left"
              onMouseEnter={(e) => setPreview([e, c.img])}
            >
              <span>
                {c.platform}: {c.date}
              </span>
              <div>{c.title}</div>
            </li>
          ))}
        </ListHoverEffect>
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 z-10 max-h-fit w-full -translate-y-1/2 translate-x-full cursor-pointer rounded-2xl bg-white p-5 shadow-2xl transition-all duration-[1s] ease-[ease-in-out]"
              style={{
                top: preview?.target.offsetTop,
              }}
            >
              {/* TODO: The image height should change smoothly */}
              <Image
                src={data}
                alt="certificate"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Certificates;
