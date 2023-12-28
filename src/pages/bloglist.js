import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Header } from "@/components/Header";
import { Allhero } from "@/components/Allhero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className="flex justify-center m-auto xl:w-4/5">
        <Header />
      </header>
      <main className="flex justify-center m-auto xl:w-4/5">
        <Allhero />
      </main>
      <footer className="flex justify-center m-auto bg-gray-200 justify-center">
        <Footer />
      </footer>
    </>
  );
}
