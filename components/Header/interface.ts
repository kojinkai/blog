export enum Links {
  HOME = "home",
  ABOUT = "about",
  POSTS = "posts",
  RESUME = "resume",
}

interface HeaderProps {
  activeLink?: Links;
}

export default HeaderProps;
