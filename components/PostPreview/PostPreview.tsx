import Link from "next/link";
import DateDisplay from "../DateDisplay";
import Heading, { useHeadingStyles } from "../Heading";
import PostPreviewProps from "./interface";

export default function PostPreview({
  post: { title, publishedDate, slug },
}: PostPreviewProps) {
  const headingStyles = useHeadingStyles({
    level: Heading.levels.h6,
    className: "underline hover:no-underline hover:text-lime-500",
  });
  return (
    <div className="flex items-center gap-8">
      <DateDisplay dateString={publishedDate} />

      <Link className={headingStyles} href={`/posts/${slug}`}>
        {title}
      </Link>
    </div>
  );
}
