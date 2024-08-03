import Link from "next/link";
import DateDisplay from "../DateDisplay";
import Heading, { useHeadingStyles } from "../Heading";
import PostPreviewProps from "./interface";

export default function PostPreview({
  post: { title, date, excerpt, slug },
}: PostPreviewProps) {
  const headingStyles = useHeadingStyles({
    level: Heading.levels.h3,
    className: "hover:underline",
  });
  return (
    <div className="flex justify-between">
      <Link className={headingStyles} href={`/posts/${slug}`}>
        {title}
      </Link>
      <div className="mb-4">
        <DateDisplay dateString={date} />
      </div>
    </div>
  );
}
