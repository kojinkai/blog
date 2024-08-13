import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import { HEADING_LEVELS } from "./interface";

function useHeadingStyles({
  className,
  level,
  displayAs,
}: {
  className?: string;
  level: HEADING_LEVELS;
  displayAs?: HEADING_LEVELS;
}) {
  const displayLevel = displayAs ?? level;

  const classExtensions = {
    [HEADING_LEVELS.h1]: "text-3xl",
    [HEADING_LEVELS.h2]: "text-2xl",
    [HEADING_LEVELS.h3]: "text-xl",
    [HEADING_LEVELS.h4]: "text-xl",
    [HEADING_LEVELS.h5]: "text-lg",
    [HEADING_LEVELS.h6]: "text-base",
  };

  const headingClasses = cx(
    ibmPlexMono.className,
    classExtensions[displayLevel],
    "text-slate-900",
    "dark:text-white",
    className
  );

  return headingClasses;
}

export default useHeadingStyles;
