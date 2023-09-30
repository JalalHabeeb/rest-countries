import { render, screen, fireEvent } from "@testing-library/react";
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

  it("receiving the flags", async () => {
    render(<MockCountries />);
    const flagElement = await screen.findAllByRole("img");
    expect(flagElement).toHaveLength(3);
  });

  it("receiving the details", async () => {
    render(<MockCountries />);
    const detailsElement = await screen.findAllByTestId("countries-details");
    expect(detailsElement).toHaveLength(3);
  });

  it("Navigates to the correct path when a link is clicked", async () => {
    render(<MockCountries />);

    const countriesLinks = await screen.findAllByTestId("countries-link");
    fireEvent.click(countriesLinks[0]);

    expect(window.location.pathname).toBe(
      "/countries/Syrian%20Arab%20Republic"
    );
  });
});
