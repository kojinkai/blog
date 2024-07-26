import React from "react";
import { getByAltText, render } from "@testing-library/react";
import Avatar from "./Avatar";
import AvatarProps from "./interface";

const defaultProps = {
  name: "Dinner Time Dog",
  picture: {url: 'https://foo.jpg'}
};

const setup = (props: AvatarProps) => render(<Avatar {...props} />);

describe("The Avatar component", () => {
  it("displays the avatar name", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText(defaultProps.name)).toBeInTheDocument();
  });

  it("displays the avatar image", () => {
    const { getByAltText } = setup(defaultProps);

    expect(getByAltText(defaultProps.name)).toBeInTheDocument();
  });
});
