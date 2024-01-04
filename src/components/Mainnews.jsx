import { data } from "autoprefixer";
import React from "react";
import { useEffect, useState } from "react";
import { Left } from "./sgvs/Left";
import { Right } from "./sgvs/Right";

export const Mainnews = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const [index, setIndex] = useState(0);
  let rightClick = () => {
    if (index < articles.length - 1) {
      setIndex(index + 1);
    }
  };
  let leftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  var article = articles[index];
  return (
    <div className="hidden xl:flex mb-32">
      {article && (
        <div className="m-auto flex flex-col">
          <a href={`/${article.id}`}>
            <div className=" flex relative">
              <img
                className="rounded-xl w-[1475px] h-[700px]"
                src={
                  article.cover_image
                    ? article.cover_image
                    : "https://picsum.photos/536/354"
                }
              />
              <div className="flex w-2/5 h-1/3 absolute justify-center left-8 bottom-36">
                <div className="flex flex-col bg-white rounded-xl m-auto py-12 px-12">
                  <p className="bg-blue-600 text-white w-32 flex justify-center rounded-lg">
                    Technology
                  </p>
                  <p className="text-3xl font-bold">{article.description}</p>
                  <p className="text-gray-600 text-lg">
                    {article.readable_publish_date}
                  </p>
                </div>
              </div>
            </div>
          </a>

          <div className="flex gap-4 mt-8 justify-end">
            <div
              onClick={leftClick}
              className="border-2 border-solid border-black rounded-xl"
            >
              <Left />
            </div>
            <div
              onClick={rightClick}
              className="border-2 border-solid border-black rounded-xl"
            >
              <Right />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
