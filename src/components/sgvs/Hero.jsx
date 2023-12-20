import React, { useEffect, useState } from "react";
import { Blogcard } from "../Blogcard";

export const Hero = () => {
  return (
    <section className="w-11/12 m-auto flex flex-col">
      <p className="text-2xl font-bold ml-4">All blog posts</p>
      <Blogcard />
    </section>
  );
};
