import { Certificate } from "../../libs/certificates";
import { cn } from "../../utils/cn";
import { CertificatePreview } from "../CertificatePreview";
import { HoverAnimationItemWrapper } from "../ui/HoverAnimationItemWrapper";

type CertificateItemProps = {
  openModal: (c: Certificate) => void;
  certificate: Certificate;
  isMediaQueryMatched: boolean;
  className?: string;
};

export const CertificateItem = ({
  certificate,
  isMediaQueryMatched,
  openModal,
  className,
}: CertificateItemProps) => (
  <li
    key={certificate.title + certificate.platform}
    className={cn(
      "hover-list-item-vertical flex cursor-pointer text-left transition-all",
      className,
    )}
    onClick={() => openModal(certificate)}
  >
    <HoverAnimationItemWrapper className="w-full">
      <div className="group/item relative">
        <span>
          <span className="font-bold">{certificate.platform}</span>:{" "}
          {certificate.date}
        </span>
        <div>{certificate.title}</div>
        {isMediaQueryMatched && <CertificatePreview data={certificate} />}
      </div>
    </HoverAnimationItemWrapper>
  </li>
);
