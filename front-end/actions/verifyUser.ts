async function verifyUser(phone_number: string, otp: string) {
  const response = await fetch("http://localhost:8000/api/users/verify-user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone_number, otp }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default verifyUser;
