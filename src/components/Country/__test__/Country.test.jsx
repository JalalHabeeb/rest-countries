import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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
    expect(screen.getByTestId("country-section")).toBeInTheDocument();
  });

  it("Show the flag of the country", async () => {
    render(<MockCountry />);
    await waitFor(() => {
      expect(screen.getByTestId("flag-image")).toBeInTheDocument();
    });
  });

  it("Show the data of the country", async () => {
    render(<MockCountry />);
    await waitFor(() => {
      expect(screen.getByTestId("country-data")).toBeInTheDocument();
    });
  });

  it("Back button goes to homepage", async () => {
    render(<MockCountry />);
    fireEvent.click(screen.getByRole("link"));
    expect(window.location.pathname).toBe("/");
  });
});
