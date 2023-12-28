import React from "react";
import { Facebook } from "./sgvs/Facebook";
import { Twitter } from "./sgvs/Twitter";
import { Instagram } from "./sgvs/Instagram";
import { In } from "./sgvs/In";
import { Logo } from "./sgvs/Logo";
import { B } from "./sgvs/B";
export const Footer = () => {
  return (
    <div className="my-8 flex flex-col gap-8 xl:justify-between xl:w-4/5">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:my-16">
        <div className="hidden flex-col w-1/4 gap-8 xl:flex">
          <p className="text-lg text-black font-bold">About</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <p className="text-gray-600">Email : info@jstemplate.net</p>
            <p className="text-gray-600">Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-gray-400 m-auto xl:mt-0 xl:gap-4">
          <a href="/bloglist">
            <p>Home</p>
          </a>
          <a href="/bloglist">
            <p>Blog</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
        <div className="flex justify-center gap-4 m-auto mt-4 xl:mt-0">
          <a href="https://www.facebook.com/pinecone.academy.mongolia">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/pineconemongolia/">
            <Twitter />
          </a>
          <a href="https://www.instagram.com/pineconemongolia/">
            <Instagram />
          </a>
          <a href="https://www.instagram.com/pineconemongolia/">
            <In />
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex ml-8 xl:ml-0">
          <B />
          <div className="ml-2 flex flex-col">
            <p className="text-xl">
              Meta<span className="font-bold">Blog</span>
            </p>
            <p className="text-gray-400">© All Rights Reserved.</p>
          </div>
        </div>
        <div className="hidden xl:flex gap-4 text-gray-600">
          <p className="w-32">Terms Of Use</p>
          <p className="w-32">Privacy Policy</p>
          <p className="w-32">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
