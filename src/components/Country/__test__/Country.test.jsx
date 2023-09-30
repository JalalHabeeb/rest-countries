import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Country from "../Country";

const MockCountry = () => {
  return (
    <BrowserRouter>
      <Country />
    </BrowserRouter>
  );
};

describe("The Country section", () => {
  it("rendered on screen", () => {
    render(<MockCountry />);
    const sectionElement = screen.getByTestId("country-section");
    expect(sectionElement).toBeInTheDocument();
  });
});
