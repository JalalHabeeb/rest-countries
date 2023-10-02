import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Filter from "../Filter";

const MockFilter = () => {
  return (
    <BrowserRouter>
      <Filter />
    </BrowserRouter>
  );
};

describe("The Filter section", () => {
  it("rendered on screen", () => {
    render(<MockFilter />);
    expect(screen.getByTestId("filter")).toBeInTheDocument();
  });

  it("Should be able to type in the input", () => {
    render(<MockFilter />);
    const inputElement = screen.getByPlaceholderText(/Search for country/i);
    fireEvent.change(inputElement, {
      target: { value: "syria" },
    });
    expect(inputElement.value).toBe("syria");
  });
});
