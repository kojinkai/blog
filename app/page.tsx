import { Header, Heading, PostPreview } from "@/components";
import { getAllPosts, getLandingPage } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import { draftMode } from "next/headers";
export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const homePage = await getLandingPage(isEnabled);

  return (
    <div className="container mx-auto px-5 pb-6">
      <Header activeLink={Header.links.HOME} />
      <div className="flex flex-col gap-8 max-w-prose">
        <div className="flex flex-col gap-4">
          <Heading level={Heading.levels.h1} value="Welcome, Friends!" />
          <article className="py-8">
            <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-prose leading-normal tracking-wide">
              <Markdown content={homePage.content} />
            </div>
          </article>
          <div
            className={cx(
              ibmPlexMono.className,
              "flex flex-wrap items-center gap-x-4 sm:items-center"
            )}
          >
            <p>Find me online</p>
            <ul className="flex flex-1 items-center gap-x-4 sm:flex-initial">
              {/* <li>
                <a
                  className="inline-block p-2 sm:hover:text-link"
                  href="https://warpcast.com/stevedylandev.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1.30081 5.95589L0.663137 3.72734H4.11868H4.61868V3.22734V0.5H19.0974V3.22734V3.72734H19.5974H23.3371L22.7003 5.95589H22.2967H21.7967V6.45589V19.5144V20.0144H22.2967C22.3976 20.0144 22.5064 20.1036 22.5064 20.247V21.1275V21.6275H23.0064H23.1484C23.2487 21.6275 23.3581 21.7161 23.3581 21.8612V22.2418H16.4058V21.8612C16.4058 21.7161 16.5151 21.6275 16.6155 21.6275H16.7574H17.2574V21.1275V20.247C17.2574 20.125 17.34 20.0375 17.4271 20.0183L17.82 19.9314L17.8192 19.529L17.8035 12.3237L17.8035 12.3024L17.8016 12.2813C17.5291 9.15908 14.985 6.68965 11.8581 6.68965C8.73115 6.68965 6.18706 9.15908 5.91448 12.2813L5.91263 12.3025L5.91259 12.3238L5.89816 19.523L5.89729 19.9535L6.32283 20.0183C6.42585 20.034 6.55708 20.0886 6.65436 20.1647C6.71995 20.216 6.73823 20.2498 6.74258 20.2594V21.1275V21.6275H7.24258H7.38452C7.486 21.6275 7.59543 21.7173 7.59543 21.8612V22.2418H0.641941V21.8612C0.641941 21.7173 0.751371 21.6275 0.852847 21.6275H0.994788H1.49479V21.1275V20.247C1.49479 20.1036 1.60357 20.0144 1.70449 20.0144H2.20449V19.5144V6.45589V5.95589H1.70449H1.30081Z"></path>
                  </svg>
                  <span className="sr-only">Farcaster</span>
                </a>
              </li> */}

              <li>
                <a
                  className="inline-block p-2 sm:hover:text-link"
                  href="https://github.com/kojinkai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  <span className="sr-only">Github</span>
                </a>
              </li>

              <li>
                <a
                  className="inline-block p-2 sm:hover:text-link"
                  href="https://x.com/0xDarkEra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                  <span className="sr-only">X</span>
                </a>
              </li>
            </ul>
          </div>
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
