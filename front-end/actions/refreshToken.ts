import apiCall from "./apiCall";

async function refreshToken() {
  const url = "http://localhost:8000/api/users/token/refresh/";
  const method = "POST";
  return apiCall(url, method, undefined, true);
}

export default refreshToken;
