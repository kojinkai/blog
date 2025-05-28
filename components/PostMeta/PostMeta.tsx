import dayjs from "dayjs";
import Heading, { useHeadingStyles } from "../Heading";
import PostMetaProps from "./interface";

export default function PostMeta({
  post: { publishedDate, author, readingTimeMinutes },
}: PostMetaProps) {
  const headingStyles = useHeadingStyles({
    level: Heading.levels.h6,
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col">
        <p className={headingStyles}>By {author.name}</p>

        <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:gap-x-2 text-neutral-500 dark:text-neutral-400">
          <time className="min-w-[100px]" dateTime={publishedDate}>
            {dayjs(publishedDate).format("DD MMM YYYY")}
          </time>
          <svg
            viewBox="0 0 2 2"
            className="size-1 fill-current hidden sm:block"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          <p>{`Reading time ${readingTimeMinutes} mins`}</p>
        </div>
      </div>
    </div>
  );
}
