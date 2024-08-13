import ContentfulImage from "@/lib/contentful-image";
import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import Link from "next/link";
import logo from "../../assets/loosely_typed_transparent.png";
import HeaderProps, { Links } from "./interface";

function Header({ activeLink }: HeaderProps) {
  return (
    <div className="pt-4 mb-12 flex items-end gap-4">
      <Link href="/" className="hover:underline">
        <ContentfulImage
          alt="site logo"
          src={logo.src}
          width={120}
          height={66}
        />
      </Link>
      <nav
        id="navigation-menu"
        className={cx(
          "flex flex-row items-center divide-x divide-dashed divide-neutral-500 dark:divide-neutral-400 text-neutral-500 dark:text-neutral-400",
          ibmPlexMono.className,
          "text-sm"
        )}
      >
        <Link
          href="/"
          className={cx("px-4 sm:hover:underline", {
            "text-lime-500": activeLink === Links.HOME,
          })}
          prefetch
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cx("px-4 sm:hover:underline", {
            "text-lime-500": activeLink === Links.ABOUT,
          })}
          prefetch
        >
          About
        </Link>
      </nav>
    </div>
  );
}

Header.links = Links;

export default Header;
