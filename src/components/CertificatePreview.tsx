import { Certificate } from "../libs/certificates";

export const CertificatePreview = ({ data }: { data: Certificate }) => {
  return (
    <div className="absolute left-full top-1/2 max-h-fit w-80 origin-[left_center] -translate-y-1/2 scale-0 p-2 opacity-0 shadow-2xl transition-all delay-300 group-hover/item:scale-100 group-hover/item:opacity-100">
      <img src={data.img} alt={data.title} className="shadow-2xl" />
    </div>
  );
};
