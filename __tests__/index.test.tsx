import { render, screen } from "@testing-library/react";
import IndexPage from "../pages/index";
import "@testing-library/jest-dom";

test("renders the landing page", () => {
  render(<IndexPage />);

  // expect(screen.getByRole("heading")).toHaveTextContent(/List of Algorand Standard Asset on Asalytics/);
});
