import apiCall from "./apiCall";

async function checkPassword(phone_number: string, password: string) {
  const url = "http://localhost:8000/api/users/check-password/";
  const method = "POST";
  const body = { phone_number, password };
  const data = await apiCall(url, method, body);
  return data;
}

export default checkPassword;
