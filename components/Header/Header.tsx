import React from "react";
import HeaderProps from "./interface";
import Heading from "../Heading";

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Heading  level={Heading.levels.h1} value="Loosely Typed." />
      <Heading className="md:ml-8" level={Heading.levels.h2} value="If I must, I'll take you a piece at a time." />
    </section>
  );
}
