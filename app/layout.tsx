import { Footer } from "@/components";
import { ibmPlexSans } from "@/fonts";
import { CMS_NAME } from "@/lib/constants";
import "@/styles/globals.css";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body className="bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
        <main className="min-h-[calc(100vh-108px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
