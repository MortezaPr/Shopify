import apiCall from "./apiCall";

async function createUser(phone_number: string) {
  const url = "http://localhost:8000/api/users/signup/";
  const method = "POST";
  const body = { phone_number };
  const data = await apiCall(url, method, body);
  return data;
}

export default createUser;
