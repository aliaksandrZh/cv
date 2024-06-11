import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Certificate, certificates } from "@/data/certificates";
import { ListHoverEffect } from "./ui/list-hover-effect";
import { AnimatePresence, motion } from "framer-motion";
import CertificatePreview from "./CertificatePreview";

const Certificates = () => {
  const ref = useRef(null);
  const [[preview, data], setPreview] = useState<
    [HTMLElement, Certificate] | []
  >([]);

  // useEffect(() => {
  //   setPreview([ref as HTMLElement, certificates[0]]);
  // }, []);

  return (
    <div className="">
      <h3>Certificates</h3>
      {/* onMouseLeave={(e) => setPreview([])} */}
      <ul className="group relative" onMouseLeave={(e) => setPreview([])}>
        <ListHoverEffect>
          {/* <li
            ref={ref}
            key={certificates[0].title}
            className="hover-list-item-vertical text-left"
            onMouseEnter={(e) =>
              setPreview([e.target as HTMLElement, certificates[0]])
            }
          >
            <span>
              {certificates[0].platform}: {certificates[0].date}
            </span>
            <div>{certificates[0].title}</div>
          </li>
          <li
            key={certificates[1].title}
            className="hover-list-item-vertical text-left"
            onMouseEnter={(e) =>
              setPreview([e.target as HTMLElement, certificates[1]])
            }
          >
            <span>
              {certificates[1].platform}: {certificates[0].date}
            </span>
            <div>{certificates[1].title}</div>
          </li> */}
          {certificates.map((c, idx) => (
            <li
              key={c.title}
              className="hover-list-item-vertical text-left"
              onMouseEnter={(e) => setPreview([e.target as HTMLElement, c])}
            >
              <span>
                {c.platform}: {c.date}
              </span>
              <div>{c.title}</div>
            </li>
          ))}
        </ListHoverEffect>
        <CertificatePreview target={preview} data={data} />
        {/* <div className="absolute left-0 top-0">
          <div className="fixed left-0 top-0 h-dvh w-dvw bg-yellow"></div>
        </div> */}
      </ul>
    </div>
  );
};

export default Certificates;
// <AnimatePresence>
//   {preview && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="absolute right-0 z-10 max-h-fit w-full -translate-y-1/2 translate-x-full cursor-pointer rounded-2xl bg-white p-5 shadow-2xl transition-all duration-[1s] ease-[ease-in-out]"
//       style={{
//         top: preview?.offsetTop,
//       }}
//     >
//       {/* TODO: The image height should change smoothly */}
//       <Image
//         src={data?.img!}
//         alt="certificate"
//         onClick={() => {}}
//         className="w-full rounded-2xl shadow-2xl"
//       />
//     </motion.div>
//   )}
// </AnimatePresence>;
