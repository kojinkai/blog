"use client";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { useEffect } from "react";
import CodeProps from "./interface";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

export default function Code({ code, language }: CodeProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
