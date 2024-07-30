import { render } from "@testing-library/react";
import Footer from "./Footer";

const setup = () => render(<Footer />);

describe("The Footer component", () => {
  it("Displays a heading in the footer", () => {
    const { getByRole } = setup();

    expect(
      getByRole("heading", { level: 4, name: "Built with you in mind." })
    ).toBeInTheDocument();
  });
});
