import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { IProduct } from "../../Models/IProduct";

import ProductList from "./ProductList";

describe("Product list component", () => {
  beforeEach(() => {
    render(<ProductList products={testData} />);
  });
  it("should render a list with at least 2 items", async () => {
    const list = await screen.findByRole("list");
    await waitFor(() => expect(list.children.length).toBeGreaterThanOrEqual(2));
  });
  it("should show a title for each item", async () => {
    const title = await screen.findAllByRole("heading");
    expect(title).toHaveLength(2);
  });
  it("should show the price for each item", async () => {
    expect(screen.getByText("Price: $19.99")).toBeInTheDocument();
    expect(screen.getByText("Price: $29.99")).toBeInTheDocument();
  });
  it("should show a picture for each item", async () => {
    const images = await screen.findAllByRole("img");
    expect(images).toHaveLength(2);
  });
});

const testData: IProduct[] = [
  {
    id: 1,
    title: "Red Christmas Ornaments (Set of 24)",
    image: "http://localhost:5020/img/1.jpg",
    price: 19.99,
  },
  {
    id: 2,
    title: "LED String Lights (Warm White, 50ft)",
    image: "http://localhost:5020/img/2.jpg",
    price: 29.99,
  },
];
