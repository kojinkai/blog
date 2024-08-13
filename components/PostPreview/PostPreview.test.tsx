import { Post } from "@/models";
import { render } from "@testing-library/react";
import PostPreview from "./PostPreview";
import PostPreviewProps from "./interface";

const defaultProps = {
  post: {
    slug: "hey-this-is-a-new-post-by-lewis",
    publishedDate: "2024-07-25",
    title: "Hey this is a new post by lewis",
  } as Post,
};

const setup = (props: PostPreviewProps) => render(<PostPreview {...props} />);

describe("The PostPreview component", () => {
  it("Displays the post title", () => {
    const { getByRole } = setup(defaultProps);

    expect(
      getByRole("link", { name: defaultProps.post.title })
    ).toBeInTheDocument();
  });

  it("Displays the post date", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("25 Jul 2024")).toBeInTheDocument();
  });
});
