export enum SupportCodeSnippets {
  CSS = "CSS",
  PYTHON = "Python",
  JavaScript = "JavaScript",
  TYPESCRIPT = "Typescript",
}

/** Text node inside rich text document content (e.g. inside paragraph) */
export type EmbeddedEntryContentBlock = {
  data: Record<string, unknown>;
  marks: Array<{ type: string }>;
  value: string;
  nodeType: "text";
};

/** Block node inside rich text document (e.g. paragraph) */
export type EmbeddedEntryBlockNode = {
  data: Record<string, unknown>;
  content: EmbeddedEntryContentBlock[];
  nodeType: string;
};

export type EmbeddedCodeSnippetContent = {
  snippet: {
    json: {
      data: Record<string, unknown>;
      content: EmbeddedEntryBlockNode[];
      nodeType: "document";
    };
  };
  title: string;
  language: string;
};

export enum EmbeddedEntry {
  CODE_SNIPPET = "ComponentCodeSnippet",
}

/** Base shape for every entry in content.links.entries.block */
interface EntryBlockBase {
  __typename: EmbeddedEntry;
  sys: { id: string };
}

/** Discriminated union: full block data for each embedded entry type */
export type EntryBlock = EntryBlockBase & EmbeddedCodeSnippetContent;
