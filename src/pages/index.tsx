import Header from "@/components/Header";
import Exp from "@/components/Exp";
import { Inter, Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={roboto.className + " min-h-dvh"}>
      <Header />
      <div className="container mx-auto mb-10"></div>

      <Exp />

      <div className="pb-96"></div>
    </div>
  );
}
