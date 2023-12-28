import React, { useEffect, useState } from "react";
import { Allblogscard } from "./Allblogscard";

export const Allhero = () => {
  return (
    <section className="m-auto flex flex-col xl:ml-0 xl:mb-16">
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
      </div>
      <Allblogscard />
    </section>
  );
};
