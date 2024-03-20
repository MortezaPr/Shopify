import apiCall from "./apiCall";

async function login(username: string, password: string) {
  const url = "http://localhost:8000/users/login/";
  const method = "POST";
  const body = { username, password };
  const data = await apiCall(url, method, body);
  return data;
}

export default login;
