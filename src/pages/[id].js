import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Caladea } from "next/font/google";

const Detail = () => {
  const { query } = useRouter();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("https://dev.to/api/articles");
      const data = await response.json();
      setFilteredArticles(
        data.filter((article) => article.id === parseInt(query.id))
      );
    };

    if (query?.id) {
      fetchArticles();
    }
  }, [query?.id]);

  return (
    <>
      <header className="flex justify-center m-auto xl:w-4/5">
        <Header />
      </header>
      <main className="flex justify-center m-auto my-8 xl:w-4/5">
        {filteredArticles.map((article) => {
          return (
            <div className="w-11/12 flex flex-col justify-center gap-8">
              <p className="text-xl font-bold">{article.description}</p>
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
              <img
                className="h-60 rounded-xl xl:h-full"
                src={
                  article.cover_image
                    ? article.cover_image
                    : "https://picsum.photos/536/354"
                }
                alt=""
              />
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <p className="text-xl font-bold">What is Lorem Ipsum?</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-xl font-bold">Why do we use it?</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          );
        })}
      </main>
      <footer className="flex justify-center m-auto bg-gray-200 justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default Detail;
