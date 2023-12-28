import React, { useEffect, useState } from "react";
import { Blogcard } from "./Blogcard";
export const Hero = () => {
  return (
    <section className="m-auto flex flex-col xl:ml-0">
      <p className="text-2xl font-bold ml-4 xl:ml-0">All blog posts</p>
      <div className="hidden xl:flex justify-between my-8">
        <div className="flex gap-8">
          <button>All</button>
          <button>Design</button>
          <button>Travel</button>
          <button>Fashion</button>
          <button>Technology</button>
          <button>Branding</button>
        </div>
        <a href="/bloglist">
          <p>View All</p>
        </a>
      </div>
      <Blogcard />
      <a href="/bloglist">
        <div className="flex justify-center mx-auto my-8 border-2 border-solid border-gray-300 w-32 rounded-xl">
          <p className="flex justify-center text-xl text-gray-400">Load More</p>
        </div>
      </a>
    </section>
  );
};
