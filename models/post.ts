import { Content } from "./content";

export interface Post {
  slug: string;
  title: string;
  publishedDate: string;
  shortDescription: string;
  readingTimeMinutes: number;
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
  content: Content;
  relatedBlogPostsCollection: {
    items: Post[];
  };
}
