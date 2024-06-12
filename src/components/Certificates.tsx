import { Certificate, certificates } from "@/data/certificates";
import { useEffect, useState } from "react";
import CertificatePreview from "./CertificatePreview";
import AnimationContextWrapper from "@/hooks/cv-context";
import HoverBackground from "./ui/hover-bg";
import HoverItemWrapper from "./ui/hover-item-wrapper";

const Certificates = () => {
  const [[preview, data], setPreview] = useState<
    [HTMLElement, Certificate] | []
  >([]);

  return (
    //
    <div className="" onMouseLeave={(e) => setPreview([])}>
      <h3>Certificates</h3>
      {/* <AnimationContextWrapper itemIdentifierAttribute="data-hover-item-certificate"> */}
      <ul className="group">
        {certificates.map((c) => (
          <HoverItemWrapper key={c.title + c.platform}>
            <li
              className="hover-list-item-vertical text-left"
              onMouseEnter={(e) => setPreview([e.target as HTMLElement, c])}
            >
              <span>
                {c.platform}: {c.date}
              </span>
              <div>{c.title}</div>
            </li>
          </HoverItemWrapper>
        ))}
        <HoverBackground bgIdentifierAttribute="certificates-level-hover-bg" />
      </ul>
      <CertificatePreview data={data} />
      {/* </AnimationContextWrapper> */}
    </div>
  );
};

export default Certificates;
