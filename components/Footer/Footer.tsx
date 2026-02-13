import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import TextScrambler from "../TextScrambler";

const inspirationalQuotes: string[] = [
  "I have come here to chew bubblegum and kick ass…",
  "What is now proved was once only imagined.",
  "Show me your friends, and I'll show you your future.",
  "Tell me who your heroes are and I’ll tell you how you’ll turn out to be.",
  "Looking Good, Lewis. Feeling good, Billy-Ray",
];

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-neutral-400 print:hidden">
      <div className="container mx-auto px-5">
        <div className="py-10 flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between lg:items-baseline gap-4">
          <TextScrambler phrases={inspirationalQuotes} timeout={3000} />
          <div
            className={cx(
              ibmPlexMono.className,
              "text-sm lg:min-w-80 text-center lg:text-right",
            )}
          >
            All rights reserved, copyright © 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
