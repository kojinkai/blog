import { render } from "@testing-library/react";
import Text from "./Text";
import TextProps from "./interface";

const defaultProps = {
  value: "the Text value",
  variant: Text.variants.p1,
};

const setup = (props: TextProps) => render(<Text {...props} />);

describe("The Text component", () => {
  describe("displaying the text value", () => {
    it("displays the text passed as value", () => {
      const { getByText } = setup(defaultProps);

      expect(getByText("the Text value")).toBeInTheDocument();
    });
  });

  describe("changing the semantic HTML element that is displayed", () => {
    it("displays the text as a div element by default", () => {
      const { getByText } = setup({
        ...defaultProps,
        value: "this is a div element",
      });

      expect(getByText("this is a div element").nodeName).toBe("DIV");
    });

    it("supports displaying the text as a P element", () => {
      const { getByText } = setup({
        ...defaultProps,
        displayAs: Text.elements.p,
        value: "this is a p element",
      });

      expect(getByText("this is a p element").nodeName).toBe("P");
    });

    it("supports displaying the text as a span element", () => {
      const { getByText } = setup({
        ...defaultProps,
        displayAs: Text.elements.span,
        value: "this is a span element",
      });

      expect(getByText("this is a span element").nodeName).toBe("SPAN");
    });
  });

  describe("adding arbirary classes to the element", () => {
    it("adds any additional classes to the existing display classes", () => {
      const { getByText } = setup({
        ...defaultProps,
        className: "foo bar",
      });

      expect(getByText(defaultProps.value).classList.contains("foo")).toBe(
        true,
      );
      expect(getByText(defaultProps.value).classList.contains("bar")).toBe(
        true,
      );
    });
  });
});
