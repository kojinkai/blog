"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Heading, { useHeadingStyles } from "../Heading";
import { QueueItem, TextScramblerProps } from "./interface";

export default function TextScrambler({
  phrases,
  timeout = 800,
}: TextScramblerProps): JSX.Element {
  const [currentText, setCurrentText] = useState("");
  const [counter, setCounter] = useState(0);
  const frameRequest = useRef<number | null>(null);
  const frame = useRef<number>(0);
  const queue = useRef<QueueItem[]>([]);
  const resolveRef = useRef<((value: unknown) => void) | null>(null);
  const el = useRef<HTMLDivElement | null>(null);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const headingStyles = useHeadingStyles({
    level: Heading.levels.h4,
  });

  const randomChar = useCallback(() => {
    return chars[Math.floor(Math.random() * chars.length)];
  }, [chars]);

  const update = useCallback(() => {
    let output = "";
    let complete = 0;

    for (let i = 0, n = queue.current.length; i < n; i++) {
      let { from, to, start, end, char } = queue.current[i];

      if (frame.current >= end) {
        complete++;
        output += to;
      } else if (frame.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue.current[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    if (el.current) {
      el.current.innerHTML = output;
    }

    if (complete === queue.current.length) {
      if (resolveRef.current) {
        resolveRef.current(undefined);
      }
    } else {
      frameRequest.current = requestAnimationFrame(update);
      frame.current++;
    }
  }, [randomChar]);

  const setText = useCallback(
    (newText: string) => {
      const oldText = currentText;
      const length = Math.max(oldText.length, newText.length);

      return new Promise((resolve) => {
        resolveRef.current = resolve;

        const newQueue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          newQueue.push({ from, to, start, end });
        }

        queue.current = newQueue;

        if (frameRequest.current) {
          cancelAnimationFrame(frameRequest.current);
        }

        frame.current = 0;
        update();
      });
    },
    [currentText, update]
  );

  const next = useCallback(() => {
    setText(phrases[counter]).then(() => {
      setTimeout(() => {
        setCounter((prevCounter) => (prevCounter + 1) % phrases.length);
      }, timeout);
    });
  }, [counter, phrases, setText, timeout]);

  useEffect(() => {
    next();

    return () => {
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    };
  }, [counter, next]);

  return (
    <div data-testid="text-scramble" className={headingStyles}>
      <div data-testid="text" ref={el} className="min-h-[28px]"></div>
    </div>
  );
}
