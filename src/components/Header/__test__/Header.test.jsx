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
      const darkDiv = screen.getByText("Dark mode");
      const body = document.body;
      fireEvent.click(darkDiv);
      expect(body).toHaveClass("light-mode");
    });
  });
});
