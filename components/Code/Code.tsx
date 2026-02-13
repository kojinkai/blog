"use client";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.min.css";
import { useEffect } from "react";
import CodeProps from "./interface";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("python", python);

export default function Code({ code, language }: CodeProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="not-prose bg-neutral-300 dark:bg-neutral-900 text-sm relative overflow-hidden max-w-full mb-6 rounded-md">
      <span
        className={`language-${language.toLowerCase()} mb-0 p-4 block min-h-full overflow-auto`}
      >
        <code>{code}</code>
        <small className="bg-neutral-900 absolute top-0 right-0 uppercase font-bold text-xs rounded-bl-md px-3 py-1">
          {language.toUpperCase()}
        </small>
      </span>
    </pre>
  );
}
