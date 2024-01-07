import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from "@/app/shoppingCart/page";
import "@testing-library/jest-dom";

describe("ShoppingCart", () => {
  it("Should remove item when button is clicked", () => {
    // Arrange
    render(<ShoppingCart />);

    // Act
    const button = screen.getByTestId("remove-button");
    fireEvent.click(button);

    // Assert
    expect(
      screen.queryByText(
        "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو TH/A (A2643) تک سیم کارت ظرفیت 256 گیگابایت رم 6 گیگابایت"
      )
    ).not.toBeInTheDocument();
  });

  it("Should increment count when button is clicked", () => {
    // Arrange
    render(<ShoppingCart />);

    // Act
    const button = screen.getByTestId("increment-button");
    const countElement = screen.getByTestId("item-count");
    const initialCount = Number(countElement.textContent);

    fireEvent.click(button);

    // Assert
    const finalCount = Number(countElement.textContent);
    expect(finalCount).toBe(initialCount + 1);
  });
});
