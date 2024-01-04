import { useContext, useEffect, useState } from "react";
import { Logo } from "./sgvs/Logo";
import { Search } from "./sgvs/Search";
import Link from "next/link";
import { SearchContextValue } from "@/context/SearchContext";

export const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContextValue);

  const [toggle, setToglle] = useState(false);
  function clickedBurger() {
    setToglle(!toggle);
  }

  return (
    <div className="flex flex-col w-11/12 m-auto justify-between xl:w-full xl:m-0 xl:my-8">
      {" "}
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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
          onClick={clickedBurger}
          id="burger"
          className="flex flex-col gap-1 xl:hidden"
        >
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
        </div>
      </div>
      <div className="flex justify-center m-auto w-full">
        {toggle === true && (
          <div className="bg-gray-600 flex flex-col bg-black text-white w-full rounded-lg gap-4">
            <a className="ml-8 pt-2" href="/">
              <p>Home</p>
            </a>
            <a className="ml-8" href="/bloglist">
              <p>Blog</p>
            </a>
            <a className="ml-8 pb-2" href="/contact">
              <p>Contact</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
