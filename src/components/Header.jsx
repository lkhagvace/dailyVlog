import React, { useEffect, useState } from "react";
import { Logo } from "./sgvs/Logo";
import { Search } from "./sgvs/Search";
import Link from "next/link";

export const Header = () => {
  const array = [
    "home",
    "blog",
    "contact",
    "facebook",
    "instagramm",
    "twitter",
  ];
  const newArr = [];
  let newLetterArr = [];
  for (let i = 0; i < array.length; i++) {
    newLetterArr.push(array[i].split(""));
  }
  const handleText = (e) => {
    const value = e.target.value;
    newArr.pop();
    newArr.push(value.split(""));
    if (value === "") {
      document.getElementById(`container`).style = "display: none";
      document.getElementById("home").style = "display: none";
      document.getElementById("facebook").style = "display: none";
      document.getElementById("instagramm").style = "display: none";
      document.getElementById("twitter").style = "display: none";
      document.getElementById("blog").style = "display: none";
      document.getElementById("contact").style = "display: none";
    }
    if (value !== "") {
      document.getElementById(`container`).style = "display: flex";
      for (let k = 0; k < array.length; k++) {
        for (let j = 0; j < newArr.length; j++) {
          if (newArr[j][0] === newLetterArr[k][j]) {
            document.getElementById(`${array[k]}`).style = "display: flex";
          }
        }
      }
    }
  };
  // const [toggle, setToggle] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  // isVisible = () => {};
  // function onBurger() {
  //   setToggle(!toggle);
  // }
  // function notBurger() {
  //   setToggle(!toggle);
  // }
  // useEffect(() => {
  //   if (toggle === false) {
  //     setIsVisible(false);
  //   }
  //   if (toggle === true) {
  //     setIsVisible(true);
  //   }
  // }, [toggle]);
  return (
    <div className="flex w-11/12 m-auto justify-between my-8 xl:w-full xl:m-0 xl:my-8">
      <a href="/">
        <Logo />
      </a>
      <nav className="hidden xl:flex justify-between w-3/5 mr-0">
        <div className="hidden xl:flex gap-8 text-gray-500">
          <a href="/">
            <p>Home</p>
          </a>
          <a href="/bloglist">
            <p>Blog</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
        <div className="flex">
          <div className="relative flex">
            <input
              onChange={handleText}
              id="search"
              type="text"
              placeholder="Search"
            />
            <div className="absolute right-0 mt-2">
              <Search />
            </div>
          </div>
          <div id="container" className="flex flex col">
            <div
              id="home"
              className="hidden absolute top-8 bg-black text-white w-32 h-8 rounded-xl justify-center m-auto pt-1"
            >
              <Link href={"/"}>Home</Link>
            </div>
            <div
              id="blog"
              className="hidden absolute top-8 bg-black text-white w-32 h-8 rounded-xl justify-center m-auto pt-1"
            >
              <a href="/bloglist">blog</a>
            </div>
            <div
              id="contact"
              className="hidden absolute top-8 bg-black text-white w-32 h-8 rounded-xl justify-center m-auto pt-1"
            >
              <a href="/contact">contact</a>
            </div>
            <div
              id="facebook"
              className="hidden absolute top-8 bg-black text-white w-32 h-8 rounded-xl justify-center m-auto pt-1"
            >
              <a href="https://www.facebook.com/pinecone.academy.mongolia">
                facebook
              </a>
            </div>
            <div
              id="instagramm"
              className="hidden absolute top-8 bg-black text-white w-32 h-8 rounded-xl justify-center m-auto pt-1"
            >
              <a href="https://www.instagram.com/pineconemongolia/">
                instagramm
              </a>
            </div>
            <div
              id="twitter"
              className="hidden absolute top-8 bg-black text-white w-32 h-8 rounded-xl justify-center m-auto pt-1"
            >
              <a href="https://www.instagram.com/pineconemongolia/">twitter</a>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="clickedBurger"
        className=" hidden flex-row bg-black text-white xl:hidden"
      >
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/bloglist">
          <p>Blog</p>
        </a>
        <a href="/contact">
          <p>Contact</p>
        </a>
        <p>Cancel</p>
      </div>
      <div id="burger" className="flex flex-col gap-1 xl:hidden">
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>
    </div>
  );
};
