import dayjs from "dayjs";
import DateDisplayProps from "./interface";
dayjs().format();

export default function DateDisplay({ dateString }: DateDisplayProps) {
  return (
    <time dateTime={dateString}>{dayjs(dateString).format("DD/MM/YYYY")}</time>
  );
}
