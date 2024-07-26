import React from "react";
import { render } from "@testing-library/react";
import FeaturedPost from "./FeaturedPost";
import FeaturedPostProps from "./interface";
import { Post } from "@/models";

const mockPost: Post = {
  date: "2024-07-25T00:00:00.000+01:00",
  excerpt: "Unlike many other posts, this one is mine",
  slug: "hey-this-is-a-new-post-by-lewis",
  title: "Hey this is a new post by lewis",
}

const defaultProps = {post: mockPost};

const setup = (props: FeaturedPostProps) => render(<FeaturedPost {...props} />);

describe("The FeaturedPost component", () => {
  it("Displays a link to the post", () => {
    const { getByRole } = setup(defaultProps);

    expect(getByRole("link", {name: defaultProps.post.title})).toBeInTheDocument();
    expect(getByRole("link").getAttribute('href')).toBe(`/posts/${defaultProps.post.slug}`);
  });

  it("Displays the post excerpt", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText(defaultProps.post.excerpt)).toBeInTheDocument();
  });

  it("Displays the post date", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText('July 25, 2024')).toBeInTheDocument();
  });
});
