import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ShoppingCart from "@/app/shoppingCart/page";
import Product from "@/app/product/[slug]/page";
import "@testing-library/jest-dom";

describe("ShoppingCart", () => {
  it("Should add item to cart when button is clicked in Product component", () => {
    render(<Product />);

    const button = screen.getByTestId("add-to-cart-button");
    fireEvent.click(button);
  });

  it("Should increment count when button is clicked", () => {
    render(<ShoppingCart />);

    const button = screen.getByTestId("increment-button");
    const countElement = screen.getByTestId("item-count");
    const initialCount = Number(countElement.textContent);

    fireEvent.click(button);

    const finalCount = Number(countElement.textContent);
    expect(finalCount).toBe(initialCount + 1);
  });

  it("Should remove item when button is clicked", () => {
    render(<ShoppingCart />);

    const button = screen.getByTestId("remove-button");
    fireEvent.click(button);

    expect(
      screen.queryByText(
        "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو TH/A (A2643) تک سیم کارت ظرفیت 256 گیگابایت رم 6 گیگابایت"
      )
    ).not.toBeInTheDocument();
  });
});
