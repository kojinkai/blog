import { Header, Heading, PostPreview } from "@/components";
import { getAllPosts, getLandingPage } from "@/lib/api";
import { draftMode } from "next/headers";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const homePage = await getLandingPage(isEnabled);

  return (
    <div className="container mx-auto px-5">
      <Header activeLink={Header.links.HOME} />
      <div className="flex flex-col gap-8 max-w-prose">
        <div className="flex flex-col gap-4">
          <Heading level={Heading.levels.h1} value="Welcome, Friend!" />
          <div>{homePage.about}</div>
        </div>
        <div className="flex flex-col gap-4">
          <Heading level={Heading.levels.h2} value="Posts" />
          <ul className="space-y-4 sm:space-y-2">
            {allPosts.map((post) => (
              <li key={post.slug} className="flex flex-col gap-x-2 sm:flex-row">
                <PostPreview post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
