import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import Link from "next/link";
import PostMeta from "../PostMeta";
import PostPreviewProps from "./interface";

export default function PostPreview({ post }: PostPreviewProps) {
  const { title, shortDescription, slug } = post;

  return (
    <Link
      href={`/posts/${slug}`}
      className="
        relative 
        justify-between 
        border-slate-700
        dark:border-slate-400 
        hover:border-slate-300
        bg-white 
        dark:bg-neutral-800
        md:rounded-2xl 
        -outline-offset-2 
        flex 
        flex-col 
        gap-4 
        md:gap-6 
        rounded-2xl 
        border
        px-6 
        py-6 
        md:py-6.5 
        transition-colors 
        duration-200 
        motion-reduce:transition-none
        hover:text-lime-500"
    >
      <div className="flex flex-col gap-2">
        <span className={cx("text-lg", ibmPlexMono.className)}>{title}</span>
        <span className="text-neutral-500 dark:text-neutral-400">
          {shortDescription}
        </span>
      </div>

      <PostMeta post={post} />
    </Link>
  );
}
