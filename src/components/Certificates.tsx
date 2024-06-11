import { Certificate, certificates } from "@/data/certificates";
import { useState } from "react";
import CertificatePreview from "./CertificatePreview";
import { ListHoverEffect } from "./ui/list-hover-effect";

const Certificates = () => {
  const [[preview, data], setPreview] = useState<
    [HTMLElement, Certificate] | []
  >([]);

  return (
    <div className="">
      <h3>Certificates</h3>
      <ul className="group relative" onMouseLeave={(e) => setPreview([])}>
        <ListHoverEffect>
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
      </ul>
    </div>
  );
};

export default Certificates;
