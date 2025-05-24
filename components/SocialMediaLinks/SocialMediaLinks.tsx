import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import { IconGithub, IconLinkedin, IconTwitter } from "../Icons";

export default function SocialMediaLinks() {
  return (
    <div
      className={cx(
        ibmPlexMono.className,
        "flex flex-wrap items-center gap-x-4 print:hidden"
      )}
    >
      <p>Find me online</p>
      <ul className="flex flex-1 items-center gap-x-4 sm:flex-initial">
        <li>
          <a
            href="https://www.linkedin.com/in/lewisnixon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin className="size-6" />
            <span className="sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kojinkai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub className="size-6" />
            <span className="sr-only">Github</span>
          </a>
        </li>

        <li>
          <a
            href="https://x.com/serially_lewis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconTwitter className="size-6" />
            <span className="sr-only">X</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
