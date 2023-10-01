import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("The Header section", () => {
  it("rendered on screen", () => {
    render(<MockHeader />);
    const sectionElement = screen.getByTestId("header");
    expect(sectionElement).toBeInTheDocument();
  });

  describe("Dark/Light Mode", () => {
    it("add class to body when clicked", () => {
      render(<MockHeader />);
      fireEvent.click(screen.getByText("Dark mode"));
      expect(document.body).toHaveClass("light-mode");
    });
  });

  it("Navigates to the home when click on 'Where in the world'", () => {
    render(<MockHeader />);
    fireEvent.click(screen.getByText(/Where in the world?/i));
    expect(window.location.pathname).toBe("/");
  });
});
