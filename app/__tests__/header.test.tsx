import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../_components/Header";

it("renders the header component with svg logo and app name", () => {
    render(<Header />);

    const svg = screen.getAllByTestId("svg");
    const heading = screen.getByRole("heading", { name: "TODO" });
    expect(svg && heading).toBeInTheDocument();
});
