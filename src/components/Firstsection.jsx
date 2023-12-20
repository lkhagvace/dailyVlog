import React from "react";

export const Firstsection = () => {
  return (
    <div className="flex w-11/12 m-auto my-8 flex-col">
      <p className="text-xl font-bold">Trending</p>
      <img src="/firstImg.png" alt="" className="my-8" />
      <div className="w-4/5 m-auto relative my-8">
        <img className="rounded-xl" src="/firstImg.png" alt="" />
        <div className="absolute flex flex-col bottom-8 w-11/12 pl-8">
          <div className="w-24 bg-blue-500 rounded-lg text-white h-8 align-center">
            Trending
          </div>
          <p className="text-white font-bold text-xl mt-4">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
        </div>
      </div>
    </div>
  );
};
