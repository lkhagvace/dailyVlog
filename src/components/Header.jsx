import React, { useEffect, useState } from "react";
import { Logo } from "./sgvs/Logo";
import { Search } from "./sgvs/Search";
import Link from "next/link";

export const Header = () => {
  const [searchValue, setSearchValue] = useState([]);
  console.log(searchValue);
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
        <div className="relative flex">
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            id="search"
            type="text"
            placeholder="Search"
          />
          <div className="absolute right-0 mt-2">
            <Search />
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
