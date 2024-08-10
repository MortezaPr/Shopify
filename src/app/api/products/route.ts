import { NextRequest, NextResponse } from "next/server";
import products from "@/utils/products.json";

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
