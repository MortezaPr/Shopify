import { NextRequest, NextResponse } from "next/server";
import products from "@/utils/products.json";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const start = (page - 1) * limit;
    const end = page * limit;
    const paginatedProducts = products.slice(start, end);

    return NextResponse.json(paginatedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
