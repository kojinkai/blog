import { Header, Heading, PostMeta, PostPreview } from "@/components";
import { getAllPosts, getPost, getPostSeoFields } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { isEnabled } = await draftMode();
  const { slug } = await params;
  const { seoFields } = await getPostSeoFields(slug, isEnabled);

  return {
    title: seoFields.pageTitle,
    description: seoFields.pageDescription,
    openGraph: {
      title: seoFields.pageTitle,
      description: seoFields.pageDescription,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { isEnabled } = await draftMode();
  const { slug } = await params;
  const post = await getPost(slug, isEnabled);

  return (
    <div className="container mx-auto px-5 pb-6">
      <Header />
      <div
        className="
          flex
          flex-col
          gap-8
          divide-y
          divide-dashed
          divide-neutral-400"
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/posts"
            className="hover:text-lime-500 text-neutral-500 dark:text-neutral-300 print:hidden"
          >
            <span>← Back to Posts</span>
          </Link>
          <div className="flex flex-col gap-2">
            <Heading level={Heading.levels.h1} value={post.title} />
            <PostMeta post={post} />
          </div>
        </div>
        <article className="py-8">
          <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-prose leading-normal tracking-wide">
            <Markdown content={post.content} />
          </div>
        </article>
      </div>
      <section className="flex flex-col gap-4 print:hidden">
        <Heading level={Heading.levels.h2} value="Keep Reading" />

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {post.relatedBlogPostsCollection.items.map((post) => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
