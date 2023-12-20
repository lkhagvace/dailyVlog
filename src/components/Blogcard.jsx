import React from "react";
import { useEffect, useState } from "react";
export const Blogcard = (article) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center m-auto">
        {articles.map((article) => {
          return (
            <div className="my-8">
              <p className="text-xl">{article.title}</p>
              <p>{article.description}</p>
              <p>{article.readable_publish_date}</p>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
};
