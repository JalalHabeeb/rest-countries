import { render, screen } from "@testing-library/react";
import Filter from "../Filter";

describe("The Filter section", () => {
  it("rendered on screen", () => {
    render(<Filter />);
    const sectionElement = screen.getByTestId("filter");
    expect(sectionElement).toBeInTheDocument();
  });
});
