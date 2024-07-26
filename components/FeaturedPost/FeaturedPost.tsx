import React from "react";
import FeaturedPostProps from "./interface";
import Heading, { useHeadingStyles } from "../Heading";
import Link from "next/link";
import DateDisplay from "../DateDisplay";

export default function FeaturedPost({ post: {
    date,
    excerpt,
    slug,
    title,
  }
}: FeaturedPostProps) {
  const headingStyles = useHeadingStyles({level: Heading.levels.h3, className: "hover:underline" })
  return (
    <section>
      <div>
        <div>
          <Link className={headingStyles} href={`/posts/${slug}`}>
            {title}
          </Link>
          <DateDisplay dateString={date} />
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
