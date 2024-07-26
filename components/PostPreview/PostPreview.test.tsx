import React from "react";
import { render } from "@testing-library/react";
import PostPreview from "./PostPreview";
import PostPreviewProps from "./interface";

const defaultProps = {
  post: {
    "slug": "hey-this-is-a-new-post-by-lewis",
    "title": "Hey this is a new post by lewis",
    "date": "2024-07-25T00:00:00.000+01:00",
    "excerpt": "Unlike many other posts, this one is mine",
    "author": {
      "name": "Lewis Nixon",
    },
  }
};

const setup = (props: PostPreviewProps) => render(<PostPreview {...props} />);

describe("The PostPreview component", () => {
  it("Displays the post title", () => {
    const { getByRole } = setup(defaultProps);

    expect(getByRole("link", { name: defaultProps.post.title})).toBeInTheDocument();
  });

  it("Displays the post date", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("July 25, 2024")).toBeInTheDocument();
  });

  it("Displays the excerpt", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText(defaultProps.post.excerpt)).toBeInTheDocument();
  });
});
