import apiCall from "./apiCall";

async function checkUser(phone_number: string) {
  const url = `http://localhost:8000/auth/check-user-status/${phone_number}`;
  const method = "GET";
  return apiCall(url, method);
}

export default checkUser;
