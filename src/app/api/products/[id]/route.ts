import { NextRequest, NextResponse } from "next/server";
import products from "@/utils/products.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = products.find((product) => product.id === Number(params.id));
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  try {
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
