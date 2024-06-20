import apiCall from "./apiCall";

async function getProductBySlug(slug: string) {
  const url = `http://localhost:8000/store/product/get-by-slug/${slug}`;
  const method = "GET";
  return apiCall(url, method);
}

export default getProductBySlug;
