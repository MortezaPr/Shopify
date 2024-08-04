"use server";

import { requestProcessor } from "@/utils/Network";

export async function getProducts() {
  try {
    const products = await requestProcessor({
      url: "/products",
      method: "GET",
    });

    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
