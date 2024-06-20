import apiCall from "./apiCall";

async function fetchProducts() {
  const url = "http://localhost:8000/store/product/product-list/";
  const method = "GET";
  return apiCall(url, method);
}

export default fetchProducts;
