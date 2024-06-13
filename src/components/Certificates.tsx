import { Certificate, certificates } from "@/data/certificates";
import { useState } from "react";
import CertificatePreview from "./CertificatePreview";
import HoverItemWrapper from "./ui/hover-item-wrapper";
import Modal from "./ui/modal";

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const openModal = () => {
    setShow(true);
  };

  return (
    <div
      className=""
      onMouseLeave={(e) => setCertificate(null)}
      onClick={() => setShow(true)}
    >
      <h3>Certificates</h3>
      <ul className="group">
        {certificates.map((c) => (
          <HoverItemWrapper key={c.title + c.platform}>
            <li
              className="hover-list-item-vertical text-left"
              onMouseEnter={(e) => {
                // TODO: Target can be span and it leads to wrong offset
                // set width to span?
                // I want to set the offset only once
                //  TODO: On resize I have to do something. Reload window?
                // if (e.target.classList.contains("hover-list-item-vertical")) {
                //   setOffset(e.target.offsetWidth);
                // }
                setCertificate(c);
              }}
            >
              <span>
                {c.platform}: {c.date}
              </span>
              <div>{c.title}</div>
            </li>
          </HoverItemWrapper>
        ))}
      </ul>
      <Modal show={show} onCloseButtonClick={() => setShow(false)} />
      <CertificatePreview data={certificate} openModal={openModal} />
    </div>
  );
};

export default Certificates;
