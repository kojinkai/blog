import { EntryBlock } from "./embeddedEntry";

export interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description?: string;
  title?: string;
  width?: number;
  height?: number;
}

export interface AssetLink {
  block: Asset[];
}

/** Shape of content.links.entries (rich text entry blocks only; no top-level sys) */
export interface EntryLink {
  block: EntryBlock[];
}

export interface Content {
  json: any;
  links: {
    assets: AssetLink;
    entries: EntryLink;
  };
}
