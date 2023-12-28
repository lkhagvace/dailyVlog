import React from "react";
import { useEffect, useState } from "react";
import Router from "next/router";
export const Blogcard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div className="flex justify-center flex-col xl:flex-row xl:flex-wrap">
      {articles.map((article, index) => {
        if (index < 9) {
          return (
            <a
              className="flex min-w-80 flex-col justify-between rounded-lg my-4 xl:min-w-1/4 xl:flex-wrap xl:ml-0"
              href={`/${article.id}`}
            >
              <div className="my-8 flex flex-col gap-4 xl:ml-8">
                <img
                  className="h-96 w-96 m-auto xl:ml-0 rounded-xl"
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                />
                <p className="w-28 ml-4 h-8 bg-purple-200 flex justify-center text-white font-bold rounded-lg py-1 text-blue-500 xl:ml-0">
                  Technology
                </p>
                <p className="text-xl ml-4 font-bold text-3xl w-4/5 xl:ml-0">
                  {article.title}
                </p>
                <div className="flex gap-4">
                  <img
                    className="w-8 rounded-3xl"
                    src={article.user.profile_image}
                  />
                  <p className="text-gray-600 my-auto">{article.user.name}</p>
                  <p className="text-gray-600 my-auto">
                    {article.readable_publish_date}
                  </p>
                </div>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
};
