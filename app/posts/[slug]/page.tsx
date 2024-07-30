import { DateDisplay, Header, Heading } from "@/components";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { draftMode } from "next/headers";

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
      <Header />
      <article className="pb-8">
        <Heading level={Heading.levels.h1} value={post.title} />
        <div className="mb-6 text-lg">
          <DateDisplay dateString={post.date} />
        </div>

        <div className="max-w-prose leading-7 tracking-wide">
          <Markdown content={post.content} />
        </div>
      </article>
    </div>
  );
}
