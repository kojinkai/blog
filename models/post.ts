export interface Post {
  slug: string;
  title: string;
  publishedDate: string;
  shortDescription: string;
  author: {
    name: string;
  };
  featuredImage: {
    title: string;
    width: number;
    height: number;
    url: string;
  };
  seoFields: {
    pageTitle: string;
    nofollow: boolean;
  };
}
