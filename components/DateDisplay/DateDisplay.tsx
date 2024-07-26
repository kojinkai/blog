import React from "react";
import DateDisplayProps from "./interface";
import { format } from "date-fns";

export default function DateDisplay({ dateString }: DateDisplayProps) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}

