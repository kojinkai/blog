import dayjs from "dayjs";
import Heading, { useHeadingStyles } from "../Heading";
import PostMetaProps from "./interface";

export default function PostMeta({
  post: { publishedDate, author },
}: PostMetaProps) {
  const headingStyles = useHeadingStyles({
    level: Heading.levels.h6,
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col">
        <p className={headingStyles}>By {author.name}</p>

        <div className="flex items-start gap-2">
          <time
            className="text-neutral-500 dark:text-neutral-400 min-w-[100px]"
            dateTime={publishedDate}
          >
            {dayjs(publishedDate).format("DD MMM YYYY")}
          </time>
        </div>
      </div>
    </div>
  );
}
