export interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

export interface AssetLink {
  block: Asset[];
}

export interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}
