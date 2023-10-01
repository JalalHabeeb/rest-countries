import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../Filter";

describe("The Filter section", () => {
  it("rendered on screen", () => {
    render(<Filter />);
    expect(screen.getByTestId("filter")).toBeInTheDocument();
  });

  it("Should be able to type in the input", () => {
    render(<Filter />);
    const inputElement = screen.getByPlaceholderText(/Search for country/i);
    fireEvent.change(inputElement, {
      target: { value: "syria" },
    });
    expect(inputElement.value).toBe("syria");
  });
});
