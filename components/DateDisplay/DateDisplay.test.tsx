import { render } from "@testing-library/react";
import DateDisplay from "./DateDisplay";
import DateDisplayProps from "./interface";

const defaultProps = {
  dateString: "2024-07-25",
};

const setup = (props: DateDisplayProps) => render(<DateDisplay {...props} />);

describe("The DateDisplay component", () => {
  it("Displays the Date", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("25 Jul 2024")).toBeInTheDocument();
  });
});
