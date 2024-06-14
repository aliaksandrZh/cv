import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Aliaksandr Zhebit" />
      {/* bg-gradient-to-t from-white to-transparent text-black dark:from-black dark:to-black-light dark:text-white */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
