import { Post } from "@/models";

const POST_GRAPHQL_FIELDS = `
  slug
  title
  author {
    name
  }
  featuredImage {
    title 
    width
    height
    url
  }
  publishedDate
  content {
    json
    links {
      assets {
        block {
          title
          description
          width
          height
          url
          sys {
            id
          }
        }
      }
    }

  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractLandingPage(fetchResponse: any): any {
  return fetchResponse?.data?.pageLandingCollection?.items?.[0];
}

function extractAboutPage(fetchResponse: any): any {
  return fetchResponse?.data?.pageAboutCollection?.items?.[0];
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.pageBlogPostCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.pageBlogPostCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<Post[]> {
  const entries = await fetchGraphQL(
    `query {
      pageBlogPostCollection(where: { slug_exists: true }, order: title_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      pageBlogPostCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      pageBlogPostCollection(where: { slug_not_in: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

export async function getPostSeoFields(
  slug: string,
  preview: boolean
): Promise<any> {
  const seoFields = await fetchGraphQL(
    `query {
      pageBlogPostCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          seoFields {
            pageTitle
            pageDescription
          }
        }
      }
    }`,
    preview
  );

  return extractPost(seoFields);
}

export async function getLandingPage(preview: boolean): Promise<any> {
  const page = await fetchGraphQL(
    `query {
      pageLandingCollection(preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          seoFields {
            pageTitle
            nofollow
          }
          content {
            json
          }
        }
      }
    }`,
    preview
  );

  return extractLandingPage(page);
}

export async function getAboutPage(preview: boolean): Promise<any> {
  const page = await fetchGraphQL(
    `query {
       pageAboutCollection(preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          seoFields {
            pageTitle
            nofollow
          }  
          content {
            json
          }
        }
      }
    }`,
    preview
  );

  return extractAboutPage(page);
}
