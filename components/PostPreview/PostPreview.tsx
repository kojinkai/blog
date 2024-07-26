import React from "react";
import PostPreviewProps from "./interface";
import Heading, { useHeadingStyles } from "../Heading";
import Link from "next/link";
import DateDisplay from "../DateDisplay";

export default function PostPreview({post: {
    title,
    date,
    excerpt,
    slug,
  }
}: PostPreviewProps) {
  const headingStyles = useHeadingStyles({level: Heading.levels.h3, className: "hover:underline" })
  return (
    <div>
      <Link className={headingStyles} href={`/posts/${slug}`}>
        {title}
      </Link>
      <div className="mb-4">
        <DateDisplay dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
