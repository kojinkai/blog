import { render } from "@testing-library/react";
import Code from "./Code";
import CodeProps from "./interface";

const defaultProps = {
  language: "javascript",
  code: "import foo from 'foojs'",
};

const setup = (props: CodeProps) => render(<Code {...props} />);

describe("The Code component", () => {
  it("Highlights the code", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("foo")).toBeInTheDocument();
  });
});
