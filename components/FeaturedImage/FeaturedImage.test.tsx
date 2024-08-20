import { render, within } from "@testing-library/react";
import FeaturedImage from "./FeaturedImage";
import FeaturedImageProps from "./interface";

const defaultProps = {
  title: "Image title",
  url: "https://foo.s3.amazon.com",
};

const setup = (props: FeaturedImageProps) =>
  render(<FeaturedImage {...props} />);

describe("The FeaturedImage component", () => {
  describe("When the slug passed", () => {
    it("displays the featured image inside a link to the post", () => {
      const { getByRole } = setup({
        ...defaultProps,
        slug: "how-to-be-a-robot",
      });

      const link = getByRole("link");

      expect(getByRole("link").getAttribute("href")).toBe(
        "/posts/how-to-be-a-robot"
      );

      expect(within(link).getByRole("img").getAttribute("src")).toBe(
        "https://foo.s3.amazon.com?w=3840&q=75"
      );
    });
  });

  describe("When the slug is not passed", () => {
    it("displays a link to the post", () => {
      const { getByRole } = setup(defaultProps);

      expect(getByRole("img").getAttribute("src")).toBe(
        "https://foo.s3.amazon.com?w=3840&q=75"
      );
    });
  });
});
