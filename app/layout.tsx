import { Footer } from "@/components";
import { ibmPlexSans } from "@/fonts";
import "@/styles/globals.css";
import "@/styles/hljs.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Loosley Typed Blog",
  description: "When we are not sure, we are alive.",
  openGraph: {
    title: "The Loosley Typed Blog",
    description: "When we are not sure, we are alive.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      {/* <Script src="https://example.com/script.js" /> */}
      <body
        className="
          bg-white
          dark:bg-neutral-800
          text-neutral-500
          dark:text-neutral-300
          divide-y
          divide-dashed
          divide-text-neutral-500
          dark:divide-neutral-400
        "
      >
        <main className="min-h-[calc(100vh-108px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
