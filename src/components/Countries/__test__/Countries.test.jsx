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
    expect(screen.getByTestId("countries-section")).toBeInTheDocument();
  });

  it("receiving the flags", async () => {
    render(<MockCountries />);
    expect(await screen.findAllByRole("img")).toHaveLength(3);
  });

  it("receiving the details", async () => {
    render(<MockCountries />);
    expect(await screen.findAllByTestId("countries-details")).toHaveLength(3);
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
