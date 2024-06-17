import { useMediaQueryRx } from "@/hooks/useMediaQuery";
import { Certificate, certificates } from "@/libs/certificates";
import { fn } from "@/utils/fnPlaceholder";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useCallback, useState } from "react";
import { CertificatePreview } from "./CertificatePreview";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";
import { Modal } from "./ui/Modal";

export const Certificates = () => {
  const { t } = useTranslation();
  const { isMediaQueryMatched } = useMediaQueryRx();
  const [{ status, modalData }, setShow] = useState<{
    status: boolean;
    modalData?: Certificate | null;
  }>({
    status: false,
  });
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const openModal = useCallback(
    (data?: Certificate) =>
      setShow({ status: true, modalData: data ?? certificate }),
    [certificate],
  );

  return (
    <div onMouseLeave={() => setCertificate(null)}>
      <h3 className="text-title">{t("certificates.title")}</h3>
      <ul className="group">
        {certificates.map((c) => (
          <li
            key={c.title + c.platform}
            className="hover-list-item-vertical flex text-left"
            onMouseEnter={isMediaQueryMatched ? () => setCertificate(c) : fn}
            onClick={isMediaQueryMatched ? fn : () => openModal(c)}
          >
            <HoverAnimationItemWrapper className="w-full">
              <span>
                <span className="font-bold">{c.platform}</span>: {c.date}
              </span>
              <div>{c.title}</div>
            </HoverAnimationItemWrapper>
          </li>
        ))}
      </ul>

      <Modal
        show={status}
        onCloseButtonClick={() => setShow((s) => ({ ...s, status: false }))}
      >
        <div className="max-w-screen-lg rounded-2xl bg-hover p-5 shadow-2xl">
          {modalData && (
            <Image
              src={modalData.img}
              alt="certificate"
              className="max-h-[80dvh] w-full object-contain shadow-2xl"
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
