import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export const Firstsection = () => {
  const [firstnewsvlogs, setFirstnewsvlogs] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setFirstnewsvlogs(data));
  });
  return (
    <>
      <p className="text-xl font-bold mb-12">Trending</p>
      <div className="hidden xl:flex">
        <div className="flex h-96 m-auto my-8">
          <img src="/firstImg.png" alt="" className="my-8 flex xl:hidden" />
        </div>
        {firstnewsvlogs.map((firstnewsvlog, index) => {
          if (index < 4) {
            return (
              <a className="relative mr-8" href={`/${firstnewsvlog.id}`}>
                <img
                  className="min-w-1/4 h-80 rounded-xl"
                  src={
                    firstnewsvlog.cover_image
                      ? firstnewsvlog.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                />
                <div className="absolute left-4 bottom-36">
                  <p className="w-28 h-8 bg-purple-200 flex justify-center text-white font-bold rounded-lg py-1 text-blue-500">
                    Technology
                  </p>
                  <p className="text-xl font-bold text-3xl text-white">
                    {firstnewsvlog.title}
                  </p>
                </div>
              </a>
            );
          }
        })}
      </div>
    </>
  );
};
