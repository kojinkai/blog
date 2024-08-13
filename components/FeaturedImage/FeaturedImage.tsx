"use client";
import ContentfulImage from "@/lib/contentful-image";
import cx from "classnames";
import Link from "next/link";
import FeaturedImageProps from "./interface";

export default function FeaturedImage({
  title,
  url,
  slug,
}: FeaturedImageProps) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={cx("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
