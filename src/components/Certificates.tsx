import { Certificate, certificates } from "@/libs/certificates";
import { useEffect, useState } from "react";
import { CertificatePreview } from "./CertificatePreview";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";
import Image from "next/image";
import { Modal } from "./ui/Modal";
import { useMediaQueryRx } from "@/hooks/useMediaQuery";

// import { isBrowser, isMobile } from "react-device-detect";

export const Certificates = () => {
  const { isMediaQueryMatched } = useMediaQueryRx();
  const [{ status, modalData }, setShow] = useState<{
    status: boolean;
    modalData?: Certificate | null;
  }>({
    status: false,
  });
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const openModal = () => {
    setShow({ status: true, modalData: certificate });
  };

  return (
    <div onMouseLeave={() => setCertificate(null)}>
      <h3>Certificates</h3>
      <ul className="group">
        {certificates.map((c) => (
          <HoverAnimationItemWrapper key={c.title + c.platform}>
            <li
              className="hover-list-item-vertical text-left"
              onMouseEnter={() => setCertificate(c)}
              onClick={isMediaQueryMatched ? null : openModal}
            >
              <span>
                {c.platform}: {c.date}
              </span>
              <div>{c.title}</div>
            </li>
          </HoverAnimationItemWrapper>
        ))}
      </ul>
      <Modal
        show={status}
        onCloseButtonClick={() => setShow((s) => ({ ...s, status: false }))}
      >
        <div className="max-w-screen-lg rounded-2xl bg-gradient-to-b from-yellow to-white p-5 shadow-2xl">
          {modalData && (
            <Image
              src={modalData.img}
              alt="certificate"
              className="max-h-[80dvh] w-full rounded-2xl object-contain shadow-2xl"
            />
          )}
        </div>
      </Modal>
      {isMediaQueryMatched && (
        <CertificatePreview data={certificate} openModal={openModal} />
      )}
    </div>
  );
};
