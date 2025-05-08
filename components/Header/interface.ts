export enum Links {
  HOME = "home",
  ABOUT = "about",
  POSTS = "posts",
}

interface HeaderProps {
  activeLink?: Links;
}

export default HeaderProps;
