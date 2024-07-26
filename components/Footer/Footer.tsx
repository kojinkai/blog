import React from "react";
import Heading from "../Heading";


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-10">
          <Heading level={Heading.levels.h4} value="Built with you in mind." />
        </div>
      </div>
    </footer>
  );
}