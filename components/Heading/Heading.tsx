import React from "react";
import HeadingProps, { HEADING_LEVELS } from "./interface";
import useHeadingStyles from "./useHeadingStyles";

function Heading({
  ariaLabel,
  className,
  displayAs,
  id,
  level,
  value,
}: HeadingProps) {
  const headingClasses = useHeadingStyles({ className, level, displayAs });

  return React.createElement(
    level,
    {
      className: headingClasses,
      "aria-label": ariaLabel,
      id,
    },
    value
  );
}

Heading.levels = HEADING_LEVELS;

export default Heading;
