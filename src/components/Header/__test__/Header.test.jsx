import { render, screen } from "@testing-library/react";
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
});
