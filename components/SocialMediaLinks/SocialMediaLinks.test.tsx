import { render } from "@testing-library/react";
import SocialMediaLinks from "./SocialMediaLinks";

const setup = () => render(<SocialMediaLinks />);

describe("The SocialMediaLinks component", () => {
  it("displays a title", () => {
    const { getByText } = setup();

    expect(getByText("Find me online")).toBeInTheDocument();
  });

  it("displays a link to my Linkedin page", () => {
    const { getByRole } = setup();

    expect(getByRole("link", { name: "Linkedin" }).getAttribute("href")).toBe(
      "https://www.linkedin.com/in/lewisnixon/"
    );
  });

  it("displays a link to my Github page", () => {
    const { getByRole } = setup();

    expect(getByRole("link", { name: "Github" }).getAttribute("href")).toBe(
      "https://github.com/kojinkai"
    );
  });

  it("displays a link to my X page", () => {
    const { getByRole } = setup();

    expect(getByRole("link", { name: "X" }).getAttribute("href")).toBe(
      "https://x.com/serially_lewis"
    );
  });
});
