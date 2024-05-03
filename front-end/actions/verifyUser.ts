import apiCall from "./apiCall";

async function verifyUser(phone_number: string, otp: string) {
  const url = "http://localhost:8000/auth/verify/";
  const method = "POST";
  const body = { phone_number, otp };
  return apiCall(url, method, body);
}

export default verifyUser;
