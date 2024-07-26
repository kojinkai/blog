import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import { FeaturedPost, Header, MoreStories } from "@/components";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Header />
      {heroPost && (
        <FeaturedPost post={heroPost} />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
