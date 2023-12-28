import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";

export default function Card() {
  const router = useRouter();
  const {
    query: { title, desciption },
  } = router;
  const props = {
    title,
    desciption,
  };
  return (
    <>
      <header className="flex justify-center m-auto xl:w-4/5">
        <Header />
      </header>
      <main className="flex justify-center m-auto xl:w-4/5">
        {props.title}, {props.desciption}
      </main>
      <footer className="flex justify-center m-auto bg-gray-200 justify-center">
        <Footer />
      </footer>
    </>
  );
}
