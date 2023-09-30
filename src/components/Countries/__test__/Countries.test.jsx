import { render, screen } from "@testing-library/react";
import Countries from "../Countries";

describe("The countries section", () => {
  it("rendered on screen", () => {
    render(<Countries />);
    const sectionElement = screen.getByTestId("countries-section");
    expect(sectionElement).toBeInTheDocument();
  });
});
