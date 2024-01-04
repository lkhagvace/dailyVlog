import React from "react";
import { useEffect, useState, useContext } from "react";
import { SearchContextValue } from "@/context/SearchContext";
import Router from "next/router";
export const Allblogscard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  const { searchValue, setSearchValue } = useContext(SearchContextValue);
  const searchArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="flex justify-center flex-col xl:flex-row xl:flex-wrap">
      {searchArticles.map((article, index) => {
        return (
          <a
            className="flex w-11/12 m-auto flex-col gap-4 justify-between rounded-lg my-4 xl:w-1/4 xl:flex-wrap xl:mx-8"
            href={`/${article.id}`}
          >
            <img
              className="h-96 m-auto xl:ml-0 rounded-xl"
              src={
                article.cover_image
                  ? article.cover_image
                  : "https://picsum.photos/536/354"
              }
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
          </a>
        );
      })}
      {searchArticles == 0 && <h1>Not Found</h1>}
    </div>
  );
};
