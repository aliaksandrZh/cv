import { useMediaQueryRx } from "../hooks/useMediaQuery";
import { Certificate, certificates } from "../libs/certificates";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { HoverAnimationItemWrapper } from "./ui/HoverAnimationItemWrapper";
import { LazyImage } from "./ui/LazyImage";
// TODO: Investigate: In git it's started with lowercase. It's a reason of failed vercel deployment
import { Modal } from "../components/ui/Modal";
import { CertificatePreview } from "./CertificatePreview";

export const Certificates = () => {
  const { t } = useTranslation();
  const { isMediaQueryMatched } = useMediaQueryRx();
  const [{ status, modalData }, setShow] = useState<{
    status: boolean;
    modalData?: Certificate | null;
  }>({
    status: false,
  });

  const openModal = useCallback(
    (data: Certificate) => setShow({ status: true, modalData: data }),
    [],
  );

  return (
    <div>
      <h3 className="text-title">{t("certificates.title")}</h3>
      <ul className="group">
        {certificates.map((c) => (
          <li
            key={c.title + c.platform}
            className="hover-list-item-vertical flex cursor-pointer text-left"
            onClick={() => openModal(c)}
          >
            <HoverAnimationItemWrapper className="w-full">
              <div className="group/item relative">
                <span>
                  <span className="font-bold">{c.platform}</span>: {c.date}
                </span>
                <div>{c.title}</div>
                {isMediaQueryMatched && <CertificatePreview data={c} />}
              </div>
            </HoverAnimationItemWrapper>
          </li>
        ))}
      </ul>

      <Modal
        show={status}
        onCloseButtonClick={() => setShow((s) => ({ ...s, status: false }))}
      >
        <div className="max-w-screen-lg shadow-2xl">
          {modalData && (
            <LazyImage
              src={modalData.img}
              alt={modalData.title}
              className="max-h-[1000px] object-contain"
            ></LazyImage>
          )}
        </div>
      </Modal>
    </div>
  );
};
