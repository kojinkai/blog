import { Header, Heading, PostPreview, SocialMediaLinks } from "@/components";
import { getLandingPage, getRecentPosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { draftMode } from "next/headers";

export default async function HomePage() {
  const { isEnabled } = draftMode();
  const latestPosts = await getRecentPosts(isEnabled);
  const homePage = await getLandingPage(isEnabled);

  return (
    <div className="container mx-auto px-5 pb-6">
      <Header activeLink={Header.links.HOME} />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading level={Heading.levels.h1} value="Welcome" />
          <div>
            <article className="mb-4">
              <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-prose leading-normal tracking-wide">
                <Markdown content={homePage.content} />
              </div>
            </article>
            <SocialMediaLinks />
          </div>
        </div>
        <section className="flex flex-col gap-4 print:hidden">
          <Heading level={Heading.levels.h2} value="Recent Posts" />

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {latestPosts.map((post) => (
              <PostPreview post={post} key={post.slug} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
