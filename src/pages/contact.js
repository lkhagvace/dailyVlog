import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contact() {
  const state = [];

  let memory = () => {
    alert("Thanks for your feedback.");
    const info = [
      {
        ner: `${document.getElementById("nameValue").value}`,
        mail: `${document.getElementById("mail").value}`,
        subject: `${document.getElementById("subject").value}`,
        message: `${document.getElementById("message").value}`,
      },
    ];
    state.push(info);
    console.log(state);
    document.getElementById("nameValue").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  };
  return (
    <>
      <header className="flex justify-center m-auto xl:w-4/5">
        <Header />
      </header>
      <main className="w-11/12 my-8 flex justify-center m-auto xl:w-2/5 xl:my-32">
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-bold">Contact Us</p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div className="flex justify-between flex-col gap-4 xl:gap-0 xl:flex-row">
            <div className="flex justify-center border-2 border-gray border-solid xl:w-2/5 xl:flex-row">
              <a
                className="flex flex-col justify-center py-4 xl:px-4 gap-4"
                href="https://www.google.com/maps/search/1328+Oak+Ridge+Drive,+Saint+Louis,+Missouri/@38.5297831,-90.4583516,13.8z?entry=ttu"
              >
                <p className="text-2xl font-bold">Address</p>
                <p className="text-gray-400">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </a>
            </div>
            <a
              className="flex border-2 border-gray rounded-lg border-solid xl:w-2/5"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSkcXmRxJdXKPwVXwbKjVJmlrtZFhxBSchrmsrgDKkhkPflzJXqgpzrrlhFxsHmDWSNV"
            >
              <div className="flex flex-col justify-center px-10 py-4 xl:px-4 gap-4">
                <p className="text-2xl font-bold">Contact</p>
                <p className="text-gray-400">313-332-8662 info@email.com</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center bg-gray-100 rounded-lg">
            <div className="flex flex-col gap-8 py-16">
              <p className="text-xl font-bold">Leave a Message</p>
              <div className="flex justify-between">
                <input
                  id="nameValue"
                  className="w-2/5 bg-white rounded-sm border-2 border-gray-300"
                  placeholder="Your Name"
                ></input>
                <input
                  id="mail"
                  className="w-2/5 h-12 bg-white rounded-sm border-2 border-gray-300"
                  placeholder="Your Email"
                ></input>
              </div>
              <input
                id="subject"
                className="w-full h-12 bg-white rounded-sm border-2 border-gray-300"
                placeholder="Subject"
              ></input>
              <input
                id="message"
                className="w-full h-32 bg-white rounded-sm border-2 border-gray-300"
                placeholder="Write a Message"
              ></input>
              <button
                onClick={memory}
                className="w-2/5 h-8 bg-purple-600 flex justify-center text-white font-bold rounded-sm py-1 text-white"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center m-auto bg-gray-200 justify-center">
        <Footer />
      </footer>
    </>
  );
}
