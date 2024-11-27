import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe.skip("App component", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("should have a correct heading", () => {
    const heading = screen.getByText(/christmas/i);
    expect(heading).toBeInTheDocument();
  });
  it("should render a list with more than 2 items", async () => {
    const list = await screen.findByRole("list");
    await waitFor(() => expect(list.children.length).toBeGreaterThanOrEqual(2));
  });
});

//TODO remove this test suite, it was just used in the start to make sure the vitest framework was installed correctly
