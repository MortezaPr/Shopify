import axios, { Method } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

interface RequestOptions {
  url: string;
  method: Method;
  data?: any;
  headers?: any;
}

export async function requestProcessor({
  url,
  method,
  data,
  headers,
}: RequestOptions) {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
