import { render } from "@testing-library/react";
import Heading from "./Heading";
import HeadingProps from "./interface";

const defaultProps = {
  value: "the heading value",
  level: Heading.levels.h1,
};

const setup = (props: HeadingProps) => render(<Heading {...props} />);

describe("The Heading component", () => {
  it("displays the text passed as value within the header", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("the heading value")).toBeInTheDocument();
  });

  it("displays the text within the heading level passed as level", () => {
    const { getByText } = setup({
      level: Heading.levels.h2,
      value: "this is an H2",
    });

    expect(getByText("this is an H2").nodeName).toBe("H2");
  });

  it("allows a heading level to be displayed with styles of a different heading level", () => {
    const { getByText } = setup({
      level: Heading.levels.h2,
      value: "this is an H2",
      displayAs: Heading.levels.h3,
    });

    expect(getByText("this is an H2").classList.contains("text-xl")).toBe(true);
  });

  it("adds any additional classes to the existing display classes", () => {
    const { getByText } = setup({
      ...defaultProps,
      className: "foo bar",
      value: "with custom classes",
    });

    expect(getByText("with custom classes").classList.contains("foo")).toBe(
      true
    );
    expect(getByText("with custom classes").classList.contains("bar")).toBe(
      true
    );
  });
});
