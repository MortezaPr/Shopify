"use client";

import Image from "next/image";
import { getProduct } from "@/services/getProduct";
import { Product } from "@/types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  addProduct,
  decrementProduct,
  removeProduct,
} from "@/store/shoppingCartSlice";
import { useState, useEffect } from "react";
import Link from "next/link";
import BoxSkeleton from "./BoxSkeleton";

interface BoxProps {
  productId: number;
  price: number;
}

export default function Box({ productId, price }: BoxProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.shoppingCart.products.find((item) => item.id === productId)
  );

  useEffect(() => {
    async function fetchProduct() {
      const productData = await getProduct(productId);
      setProduct(productData);
    }
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <BoxSkeleton />;
  }

  const handleAdd = () => {
    dispatch(addProduct({ id: productId, price }));
  };

  const handleRemove = () => {
    dispatch(decrementProduct(productId));
  };

  const handleDelete = () => {
    dispatch(removeProduct(productId));
  };

  const totalPrice = cartItem ? product.price * cartItem.count : 0;

  return (
    <div className="w-full h-full">
      <div className="w-full gl:w-[38rem] gx:w-[45rem] h-72 sm:h-64 bg-white rounded-xl border-gray-200 border-[1px]">
        <div className="flex gap-10">
          <Link href={`/products/${productId}`} className="mt-14 mr-10">
            <Image
              src={product.image}
              alt="product-image"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex flex-col w-full mt-10">
            <p className="font-bold ml-5">{product.title}</p>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 mt-10 items-center">
              <div className="h-10 w-36 rounded-md bg-white border-[1px] border-gray-200 flex flex-row-reverse items-center justify-between px-2">
                {cartItem && cartItem.count > 1 ? (
                  <RemoveIcon
                    color="error"
                    onClick={handleRemove}
                    className="cursor-pointer"
                  />
                ) : (
                  <DeleteIcon
                    color="error"
                    onClick={handleDelete}
                    className="cursor-pointer"
                  />
                )}
                <span>
                  {cartItem ? cartItem.count.toLocaleString("fa") : 0}
                </span>
                <AddIcon
                  onClick={handleAdd}
                  className="cursor-pointer hover:text-primary"
                />
              </div>
              <div className="font-bold text-lg">
                {totalPrice.toLocaleString("fa")} تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
