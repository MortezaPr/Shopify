import Phone from "../types/Phone";

async function addPhone({
  title,
  price,
  picture,
  description,
  resolution,
  screenTech,
  osVersion,
  size,
}: Phone) {
  const response = await fetch("http://localhost:8000/item/mobile/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price,
      picture,
      description,
      resolution,
      screenTech,
      osVersion,
      size,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
}

export default addPhone;
