import { Header, Heading } from "@/components";
import { getAboutPage } from "@/lib/api";
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

export default async function Page() {
  const { isEnabled } = draftMode();
  const aboutPage = await getAboutPage(isEnabled);

  return (
    <div className="container mx-auto px-5">
      <Header activeLink={Header.links.ABOUT} />
      <div className="flex flex-col gap-8 max-w-prose">
        <div className="flex flex-col gap-4">
          <Heading level={Heading.levels.h1} value="About" />
          <div>{aboutPage.about}</div>
        </div>
      </div>
    </div>
  );
}
