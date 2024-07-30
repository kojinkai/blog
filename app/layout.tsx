import { Footer } from "@/components";
import { jetBrainsMonoNLMedium } from "@/fonts";
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
    <html lang="en" className={jetBrainsMonoNLMedium.className}>
      <body className="bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
        <main className="min-h-[calc(100vh-108px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
