import { DateDisplay, Header, Heading } from "@/components";
import { getAllPosts, getPostAndMorePosts, getPostSeoFields } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const { seoFields } = await getPostSeoFields(params.slug, isEnabled);

  return {
    title: seoFields.pageTitle,
    description: seoFields.pageDescription,
    openGraph: {
      title: seoFields.pageTitle,
      description: seoFields.pageDescription,
    },
  };
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
      <div
        className="
          flex
          flex-col
          gap-8
          divide-y
          divide-dashed
          divide-text-neutral-500
          dark:divide-neutral-400"
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="hover:text-lime-500 text-neutral-500 dark:text-neutral-300 underline hover:no-underline"
          >
            <span>← back to posts</span>
          </Link>
          <div className="flex flex-col gap-2">
            <Heading level={Heading.levels.h1} value={post.title} />
            <DateDisplay dateString={post.publishedDate} />
          </div>
        </div>
        <article className="py-8">
          <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-prose leading-normal tracking-wide">
            <Markdown content={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
