export enum TEXT_ELEMENTS {
  div = "div",
  span = "span",
  p = "p",
}

export enum TEXT_VARIANTS {
  p1 = "p1",
  p2 = "p2",
}

interface TextProps {
  className?: string;
  displayAs?: "div" | "span" | "p";
  value: string | JSX.Element;
  variant: TEXT_VARIANTS;
}

export default TextProps;
