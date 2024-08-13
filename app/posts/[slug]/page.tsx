import { DateDisplay, Header, Heading } from "@/components";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { draftMode } from "next/headers";
import Link from "next/link";

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
  const { post } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="grid grid-cols-5 gap-6 md:gap-12">
        <div className="col-span-5 max-w-5xl md:col-span-1">
          <Link href="/" className="prose prose-neutral dark:prose-invert">
            <span>← back to posts</span>
          </Link>
        </div>
        <div className="col-span-5 max-w-5xl md:col-span-3">
          <article className="pb-8">
            <Heading
              level={Heading.levels.h1}
              value={post.title}
              className="mb-4"
            />

            <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-prose leading-normal tracking-wide">
              <Markdown content={post.content} />
            </div>
          </article>
        </div>
        <div className="col-span-5 max-w-5xl md:col-span-1">
          <aside className="text-base hidden flex-col space-y-2 md:flex prose prose-neutral dark:prose-invert">
            <DateDisplay dateString={post.date} />
          </aside>
        </div>
      </div>
    </div>
  );
}
