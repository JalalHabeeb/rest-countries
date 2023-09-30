import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Countries from "../Countries";

const MockCountries = () => {
  return (
    <BrowserRouter>
      <Countries />
    </BrowserRouter>
  );
};

describe("The countries section", () => {
  it("rendered on screen", () => {
    render(<MockCountries />);
    const sectionElement = screen.getByTestId("countries-section");
    expect(sectionElement).toBeInTheDocument();
  });

  it("render the flag", async () => {
    render(<MockCountries />);
    const flagElement = await screen.findAllByRole("img");
    expect(flagElement).toHaveLength(3);
  });
});
