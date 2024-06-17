import { DownloadCV } from "@/components/Download";
import { Exp } from "@/components/Exp";
import { Header } from "@/components/Header";
import { HoverAnimationContextWrapper } from "@/components/context-wrappers/HoverAnimationContextWrapper";
import { HoverAnimationBackground } from "@/components/ui/HoverAnimationBackground";
import { cn } from "@/utils/cn";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Roboto_Mono } from "next/font/google";
import Head from "next/head";

const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
});

type Props = {};

export default function Home(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome to Aliaksandr Zhebit's CV! Explore my professional experience, projects, certificates, and download my CV. Learn more about my skills and qualifications in software development and engineering."
        ></meta>

        <title>Aliaksandr Zhebit | Web dev</title>
      </Head>
      <HoverAnimationContextWrapper itemIdentifierAttribute="data-hover-item">
        <div className={cn(roboto.className, "root-el relative min-h-dvh")}>
          <Header />

          <Exp />
          <div className="pb-32"></div>

          <div className="container mx-auto flex justify-center">
            <DownloadCV />
          </div>
          <div className="pb-96"></div>

          <HoverAnimationBackground bgIdentifierAttribute="app-level-hover-bg" />
        </div>
      </HoverAnimationContextWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
