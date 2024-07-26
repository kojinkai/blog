import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";


const setup = () => render(<Header />);

describe("The Header component", () => {
  it("Displays a level 1 heading", () => {
    const { getByRole } = setup();

    expect(getByRole("heading", {level: 1, name: "Loosely Typed."})).toBeInTheDocument();
  });

  it("Displays a level 2 sub heading", () => {
    const { getByRole } = setup();

    expect(getByRole("heading", {level: 2, name: "If I must, I'll take you a piece at a time."})).toBeInTheDocument();
  });
});
