import dayjs from "dayjs";
import DateDisplayProps from "./interface";
dayjs().format();

export default function DateDisplay({ dateString }: DateDisplayProps) {
  return (
    <time
      className="text-neutral-500 dark:text-neutral-400"
      dateTime={dateString}
    >
      {dayjs(dateString).format("DD MMM YYYY")}
    </time>
  );
}
