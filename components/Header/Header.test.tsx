import { render, within } from "@testing-library/react";
import Header from "./Header";

const setup = () => render(<Header />);

describe("The Header component", () => {
  it("Displays a link to the home page inside the nav", () => {
    const { getByRole } = setup();

    expect(
      within(getByRole("navigation")).getByRole("link", { name: "Home" })
    ).toBeInTheDocument();
  });

  it("Displays a link to the about page inside the nav", () => {
    const { getByRole } = setup();

    expect(
      within(getByRole("navigation")).getByRole("link", { name: "About" })
    ).toBeInTheDocument();
  });

  it("Displays the site logo", () => {
    const { getByRole } = setup();

    expect(getByRole("img")).toBeInTheDocument();
  });
});
