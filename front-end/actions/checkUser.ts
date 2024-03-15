async function checkUser(phone_number: string) {
  const response = await fetch(
    `http://localhost:8000/api/users/check-user/${phone_number}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default checkUser;
