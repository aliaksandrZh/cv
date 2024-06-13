import { Certificate, certificates } from "@/data/certificates";
import { useState } from "react";
import CertificatePreview from "./CertificatePreview";
import HoverItemWrapper from "./ui/hover-item-wrapper";
import Modal from "./ui/modal";
import Image from "next/image";

const Certificates = () => {
  const [{ status, modalData }, setShow] = useState<{
    status: boolean;
    modalData?: Certificate;
  }>({
    status: false,
  });
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const openModal = () => {
    setShow({ status: true, modalData: certificate! });
  };

  return (
    <div onMouseLeave={() => setCertificate(null)}>
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
      <Modal
        show={status}
        onCloseButtonClick={() => setShow((s) => ({ ...s, status: false }))}
      >
        <div className="max-w-screen-lg rounded-2xl bg-gradient-to-b from-yellow to-white p-10 shadow-2xl">
          <Image
            src={modalData?.img}
            alt="certificate"
            className="max-h-[80dvh] w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      </Modal>
      <CertificatePreview data={certificate} openModal={openModal} />
    </div>
  );
};

export default Certificates;
