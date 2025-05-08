import { Header, Heading, PostPreview } from "@/components";
import { getAllPosts } from "@/lib/api";
import { draftMode } from "next/headers";

export default async function PostsPage() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);

  return (
    <div className="container mx-auto px-5 pb-6">
      <Header activeLink={Header.links.POSTS} />

      <section className="flex flex-col gap-4 max-w-3xl">
        <Heading level={Heading.levels.h1} value="Latest Posts" />

        <div className="flex flex-col gap-4 lg:gap-6">
          {allPosts.map((post) => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
