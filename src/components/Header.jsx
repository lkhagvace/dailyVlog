import React from "react";
import { Logo } from "./sgvs/Logo";

export const Header = () => {
  return (
    <div className="flex w-11/12 m-auto justify-between my-8">
      <Logo />
      <div className="flex flex-col gap-1">
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>
    </div>
  );
};
