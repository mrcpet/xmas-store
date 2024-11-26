import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe("App component", () => {
  it("should have a correct heading", () => {
    render(<App />);
    const heading = screen.getByText(/christmas/i);
    expect(heading).toBeInTheDocument();
  });
  it("should render a list with more than 2 items", async () => {
    render(<App />);
    const list = await screen.findByRole("list");
    await waitFor(() => expect(list.children.length).toBeGreaterThanOrEqual(2));
  });
});
