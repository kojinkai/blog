import { ReactNode } from "react";

export enum HEADING_LEVELS {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadElement> {
  ariaLabel?: string;
  className?: string;
  displayAs?: HEADING_LEVELS;
  id?: string;
  level: HEADING_LEVELS;
  value: ReactNode;
}

export default HeadingProps;
