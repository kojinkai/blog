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
    [HEADING_LEVELS.h1]: "text-base font-semibold leading-7",
    [HEADING_LEVELS.h2]: "font-bold text-xl",
    [HEADING_LEVELS.h3]: "text-base font-semibold leading-6",
    [HEADING_LEVELS.h4]: "font-bold text-[24px]/[30px]",
    [HEADING_LEVELS.h5]: "font-bold text-[20px]",
    [HEADING_LEVELS.h6]: "font-bold text-[18px]/[24px]",
  };

  const headingClasses = cx(classExtensions[displayLevel], className);

  return headingClasses;
}

export default useHeadingStyles;
