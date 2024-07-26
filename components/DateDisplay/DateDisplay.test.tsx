import React from "react";
import { render } from "@testing-library/react";
import DateDisplay from "./DateDisplay";
import DateDisplayProps from "./interface";

const defaultProps = {
  dateString: "2024-07-25T00:00:00.000+01:00",
};

const setup = (props: DateDisplayProps) => render(<DateDisplay {...props} />);

describe("The DateDisplay component", () => {
  it("Displays the Date", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("July 25, 2024")).toBeInTheDocument();
  });
});
