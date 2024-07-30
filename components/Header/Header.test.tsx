import { render, within } from "@testing-library/react";
import Header from "./Header";

const setup = () => render(<Header />);

describe("The Header component", () => {
  it("Displays a level 1 heading", () => {
    const { getByRole } = setup();

    expect(
      getByRole("heading", { level: 1, name: "Loosely Typed ." })
    ).toBeInTheDocument();
  });

  it("Displays a link to the home page inside the heading", () => {
    const { getByRole } = setup();

    expect(
      within(getByRole("heading", { level: 1, name: "Loosely Typed ." }))
        .getByRole("link")
        .getAttribute("href")
    ).toBe("/");
  });
});
