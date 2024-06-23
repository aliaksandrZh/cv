import { useMediaQueryRx } from "../hooks/useMediaQuery";
import { Certificate, certificates } from "../libs/certificates";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { LazyImage } from "./ui/LazyImage";
// TODO: Investigate: In git it's started with lowercase. It's a reason of failed vercel deployment
import { Modal } from "../components/ui/Modal";
import { CertificateItem } from "./certificates/CertificateItem";
import { VisibleCertificateItemsCount } from "../libs/constants";

export const Certificates = () => {
  const { t } = useTranslation();
  const { isMediaQueryMatched } = useMediaQueryRx();
  const [collapsed, setCollapsed] = useState(true);
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
        {certificates.slice(0, VisibleCertificateItemsCount).map((c) => (
          <CertificateItem
            certificate={c}
            openModal={openModal}
            isMediaQueryMatched={isMediaQueryMatched}
          />
        ))}

        {certificates.slice(VisibleCertificateItemsCount).map((c) => (
          <CertificateItem
            className={collapsed ? "read-more-item" : "read-more-item-visible"}
            certificate={c}
            openModal={openModal}
            isMediaQueryMatched={isMediaQueryMatched}
          />
        ))}
      </ul>

      <button
        className="mt-3 w-full py-2 pl-4 text-left transition-all hover:bg-title hover:text-white active:scale-95"
        onClick={() => setCollapsed((s) => !s)}
      >
        {collapsed ? "Show more..." : "Show less"}
      </button>

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
