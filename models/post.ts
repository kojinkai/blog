export interface Post {
  slug: string,
  title: string,
  date: string,
  excerpt: string,
  author?: {
    name: string,
  }
}