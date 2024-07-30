import { Header, PostPreview } from "@/components";
import { getAllPosts } from "@/lib/api";
import { draftMode } from "next/headers";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);

  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="flex flex-col gap-4">
        {allPosts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
