import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export async function getProducts(page: number, limit: number) {
  try {
    const response = await axios.get(`${baseUrl}/api/products`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
