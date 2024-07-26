import Link from "next/link";
import { draftMode } from "next/headers";
import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { DateDisplay, Heading, MoreStories } from "@/components";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Loosely Typed
        </Link>
        .
      </h2>
      <article>
      <Heading level={Heading.levels.h1} value={post.title} />
        <div className="mb-6 text-lg">
          <DateDisplay dateString={post.date} />
        </div>

        <div className="prose">
          <Markdown content={post.content} />
        </div>
      </article>
      <hr className="border-accent-2 my-5" />
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
