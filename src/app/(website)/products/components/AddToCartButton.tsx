"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  selectProductExists,
} from "@/store/shoppingCartSlice";
import { Button } from "@mui/material";
import { RootState } from "@/store/store";

interface AddToCartButtonProps {
  productId: number;
  price: number;
  variant?: "text" | "outlined" | "contained";
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  price,
  variant = "outlined",
}) => {
  const dispatch = useDispatch();
  const productExists = useSelector((state: RootState) =>
    selectProductExists(state, productId)
  );

  const handleAddToCart = () => {
    if (productExists) {
      dispatch(removeProduct(productId));
    } else {
      dispatch(addProduct({ id: productId, price }));
    }
  };

  return (
    <Button
      variant={productExists ? "outlined" : variant}
      color={productExists ? "error" : "primary"}
      fullWidth
      onClick={handleAddToCart}
    >
      {productExists ? "حذف کردن از سبد خرید" : "اضافه کردن به سبد خرید"}
    </Button>
  );
};

export default AddToCartButton;
