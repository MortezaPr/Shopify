import apiCall from "./apiCall";

async function customerLogin(
  phone_number: string,
  password?: string,
  otp?: string
) {
  const url = "http://localhost:8000/api/users/login/";
  const method = "POST";
  const body = { phone_number, password, otp };
  const data = await apiCall(url, method, body);
  return data;
}

export default customerLogin;
