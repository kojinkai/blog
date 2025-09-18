import { Header, Heading, SocialMediaLinks } from "@/components";
import { getAboutPage } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "About The Loosley Typed Blog",
  description: "Information about the Loosely Typed blog.",
  openGraph: {
    title: "The Loosley Typed Blog",
    description: "Information about the Loosely Typed blog.",
  },
};

export default async function AboutPage() {
  const { isEnabled } = await draftMode();
  const aboutPage = await getAboutPage(isEnabled);

  return (
    <div className="container mx-auto px-5 pb-6">
      <Header activeLink={Header.links.ABOUT} />
      <div className="flex flex-col gap-4">
        <Heading level={Heading.levels.h1} value="About" />
        <SocialMediaLinks />
        <article>
          <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-prose leading-normal tracking-wide">
            <Markdown content={aboutPage.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
