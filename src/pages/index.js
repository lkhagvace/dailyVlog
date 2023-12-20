import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Firstsection } from "@/components/Firstsection";
import { Hero } from "@/components/sgvs/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Firstsection />
      <Hero />
    </main>
  );
}
