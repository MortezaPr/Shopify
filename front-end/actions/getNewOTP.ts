async function getNewOTP(phone_number: string) {
  const response = await fetch(`http://localhost:8000/api/users/get-new-otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone_number }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default getNewOTP;
