import cx from "classnames";
import React from "react";
import TextProps, { TEXT_ELEMENTS, TEXT_VARIANTS } from "./interface";

function Text({
  className,
  displayAs,
  value,
  variant,
}: TextProps): JSX.Element {
  const displayElement = displayAs || TEXT_ELEMENTS.div;

  const classExtensions = {
    [TEXT_VARIANTS.p1]: "text-base",
    [TEXT_VARIANTS.p2]: "text-lg",
  };

  const textClasses = cx(
    classExtensions[variant],
    "text-slate-500",
    "dark:text-slate-400",
    "max-w-prose",
    className
  );

  return React.createElement(
    displayElement,
    {
      className: textClasses,
    },
    value
  );
}
Text.elements = TEXT_ELEMENTS;
Text.variants = TEXT_VARIANTS;

export default Text;
