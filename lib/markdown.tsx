"use client";
import { Code, Heading } from "@/components";
import { Asset, Content } from "@/models";
import { EmbeddedEntry, EntryBlock } from "@/models/embeddedEntry";
import { ibmPlexMono } from "@/styles/fonts";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import cx from "classnames";
import Image from "next/image";
/** Extract plain text from a Contentful rich text document (e.g. snippet.json) */
function richTextToPlainText(node: {
  content?: Array<{ content?: Array<{ value?: string }>; value?: string }>;
}): string {
  if (!node?.content) return "";
  return node.content
    .map((block) => {
      if ("value" in block && typeof block.value === "string")
        return block.value;
      if (block.content) {
        return block.content
          .map((inline) => (inline && "value" in inline ? inline.value : ""))
          .join("");
      }
      return "";
    })
    .join("\n");
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <Image src={asset.url} layout="fill" alt={asset.description as string} />
    );
  }

  return null;
}

function RichTextEmbeddedEntry({
  id,
  entries,
}: {
  id: string;
  entries: EntryBlock[] | undefined;
}) {
  const entry = entries?.find((e) => e.sys.id === id);
  if (!entry) return null;

  if (entry.__typename === EmbeddedEntry.CODE_SNIPPET) {
    const code = richTextToPlainText(entry.snippet?.json ?? {});
    return <Code code={code} language={entry.language} />;
  }

  return null;
}

export function Markdown({ content }: { content: Content }) {
  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        return (
          <RichTextEmbeddedEntry
            id={node.data.target.sys.id}
            entries={content.links.entries.block}
          />
        );
      },
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <div className="mb-4 text-neutral-500 dark:text-neutral-400">
          {children}
        </div>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Heading
          className="not-prose mb-4 mt-8"
          level={Heading.levels.h1}
          value={children}
        />
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Heading
          className="not-prose mb-5 mt-8 pb-2 border-b-2 border-lime-600"
          level={Heading.levels.h2}
          value={children}
        />
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Heading
          className="not-prose mb-2 mt-8"
          level={Heading.levels.h3}
          value={children}
        />
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <Heading
          className="not-prose mb-2 mt-8"
          level={Heading.levels.h4}
          value={children}
        />
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <Heading
          className="not-prose mb-2 mt-8"
          level={Heading.levels.h5}
          value={children}
        />
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <Heading
          className="not-prose mb-2 mt-8"
          level={Heading.levels.h6}
          value={children}
        />
      ),
      [BLOCKS.QUOTE]: (_node, children) => (
        <blockquote
          className={cx(
            ibmPlexMono.className,
            "border-lime-600 prose-blockquote my-4",
          )}
        >
          {children}
        </blockquote>
      ),
    },
    renderMark: {
      [MARKS.CODE]: (text) => (
        <code className="not-prose text-neutral-500 dark:text-neutral-300 px-1 py-0.5 rounded-md bg-neutral-300 dark:bg-neutral-500">
          {text}
        </code>
      ),
    },
  });
}
