import apiCall from "./apiCall";

async function checkUser(phone_number: string) {
  const url = `http://localhost:8000/api/users/check-user/${phone_number}`;
  const method = "GET";
  return apiCall(url, method);
}

export default checkUser;
