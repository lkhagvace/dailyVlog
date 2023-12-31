import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Mainnews } from "@/components/Mainnews";
import { Firstsection } from "@/components/Firstsection";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Main } from "next/document";
import Head from "next/head";
import { B } from "@/components/sgvs/B";

export default function Index() {
  return (
    <>
      <Head>
        <title>Personal Vlog</title>
        <link rel="shortcut icon" href={`${(<B />)}`} />
      </Head>
      <main className="xl:flex flex-col w-4/5 m-auto">
        <Header />
        <Mainnews />
        <Firstsection />
        <Hero />
      </main>
      <footer className="flex justify-center bg-gray-200">
        <Footer />
      </footer>
    </>
  );
}
