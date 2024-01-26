import React from "react";
import { render, screen } from "@testing-library/react";
import PurchaseTable from "./index";
import "@testing-library/jest-dom";

describe("PurchaseTable Component", () => {
  it("renders without crashing", () => {
    const purchases = [];
    render(<PurchaseTable purchases={purchases} />);
  });
  it("displays the correct headers", () => {
    const purchases = [];
    const { getByText } = render(<PurchaseTable purchases={purchases} />);
    const headers = [
      "Name",
      "Location",
      "Purchase Date",
      "Category",
      "Description",
      "Price",
    ];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });
});
