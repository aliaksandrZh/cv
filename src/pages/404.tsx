import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";
type Props = {};
export default function Custom404(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t } = useTranslation();
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="mb-8 text-4xl font-bold text-title">404 - Not Found</h1>
        <p className="mb-4 text-lg text-title">{t("p404.text")}</p>
        <Link href="/" className="text-title">
          {t("p404.back")}
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
