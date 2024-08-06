"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Product } from "@/types";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) {
    return (
      <div className="w-40 h-40 bg-gray-200 rounded-lg animate-pulse"></div>
    );
  }
  return (
    <Image
      src={product.image}
      alt={product.title}
      width={120}
      height={120}
      onLoad={handleLoading}
    />
  );
}
