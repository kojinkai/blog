"use client";
import { Code, Heading } from "@/components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Prism from "prismjs";
import { useEffect } from "react";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
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
    return <Image src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}

export function Markdown({ content }: { content: Content }) {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks

    Prism.highlightAll();
  }, []);

  return documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <div className="mb-4">{children}</div>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading level={Heading.levels.h1} value={children} />
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading level={Heading.levels.h2} value={children} />
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading level={Heading.levels.h3} value={children} />
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading level={Heading.levels.h4} value={children} />
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading level={Heading.levels.h5} value={children} />
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading level={Heading.levels.h6} value={children} />
      ),
    },
    renderMark: {
      [MARKS.CODE]: (text) => {
        // ts compiler ignored here
        // as Text is typed as a ReactNode in the Contentful lib
        // (in reality in this scenario it's a string)

        const regex = /^lang:(\w+)/;
        // @ts-ignore
        // If the code snippet doesn't have the expected metadata
        if (!regex.test(text)) {
          return <code>{text}</code>;
        }
        // @ts-ignore
        // Extract the language
        const language = regex.exec(text)[1];

        // Remove the first line to avoid including metadata in the rendered version
        return (
          <Code
            // @ts-ignore
            code={text.split("\n").slice(1).join("\n")}
            language={language}
          />
        );
      },
    },
  });
}
