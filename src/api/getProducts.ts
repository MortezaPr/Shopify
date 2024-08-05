"use server";

import products from "@/utils/products.json";

export async function getProducts(page: number, limit: number) {
  try {
    return products.slice((page - 1) * limit, page * limit);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
