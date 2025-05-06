import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import Heading from "../Heading";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t dark:border-slate-400 border-slate-700">
      <div className="container mx-auto px-5">
        <div className="py-10 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
          <Heading
            level={Heading.levels.h4}
            value="Tell me who your heroes are and I’ll tell you how you’ll turn out to be."
          />
          <div className={cx(ibmPlexMono.className, "text-sm")}>
            All rights reserved, copyright © 2025.
          </div>
        </div>
      </div>
    </footer>
  );
}
