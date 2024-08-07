import { NextRequest, NextResponse } from "next/server";
import products from "@/utils/products.json";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];

  const numericId = id ? parseInt(id, 10) : null;

  const product = products.find((p) => p.id === numericId);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
}
