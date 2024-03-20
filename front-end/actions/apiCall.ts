import axios from "axios";

async function apiCall(url: string, method: string, body?: any) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  };
  try {
    const response = await axios(url, options);
    return response.data;
  } catch (error) {
    const axiosError = error as any;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(`HTTP error! status: ${axiosError.response.status}`);
    } else if (axiosError.request) {
      // The request was made but no response was received
      throw new Error("No response received");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error in request setup");
    }
  }
}

export default apiCall;
