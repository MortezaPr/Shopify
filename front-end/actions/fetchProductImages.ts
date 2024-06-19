import apiCall from "./apiCall";

async function fetchProductImages(id: number) {
  const url = `http://localhost:8000/media/get-media/${id}`;
  const method = "GET";
  return apiCall(url, method);
}

export default fetchProductImages;