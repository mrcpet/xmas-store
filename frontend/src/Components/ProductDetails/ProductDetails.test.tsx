import "@testing-library/jest-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { IProduct } from "../../Models/IProduct";

describe("Product list component", () => {
  beforeEach(() => {
    // render(<ProductDetails product={testData} />);
  });
  it("should show a description of the product", () => {
    const description = screen.getByText(
      "Beautiful red ornaments to make your Christmas tree sparkle."
    );
    expect(description).toBeInTheDocument();
  });
  it("should show the quantity of the product in stock", () => {
    const quantity = screen.getByText("Quantity: 150");
    expect(quantity).toBeInTheDocument();
    expect;
  });
});

const testData: IProduct = {
  id: 1,
  title: "Red Christmas Ornaments (Set of 24)",
  image: "http://localhost:5020/img/1.jpg",
  price: 19.99,
  quantity: 150,
  in_stock: true,
  description: "Beautiful red ornaments to make your Christmas tree sparkle.",
};
