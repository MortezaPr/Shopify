import Laptop from "../types/Laptop";

async function addLaptop({
  title,
  price,
  picture,
  description,
  processor,
  ram,
  internalMemory,
  gpu,
}: Laptop) {
  const response = await fetch("http://localhost:8000/item/laptop/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      title,
      price,
      picture,
      description,
      processor,
      ram,
      internalMemory,
      gpu,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
}

export default addLaptop;
