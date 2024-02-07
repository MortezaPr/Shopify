import axios from "axios";
import Phone from "../types/Phone";

async function addPhone({
  name,
  price,
  image,
  resolution,
  screen_tech,
  os_version,
  size,
  description,
}: Phone) {
  const access_token = localStorage.getItem("accessToken");

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("image", image);
  formData.append("description", description);
  formData.append("resolution", resolution);
  formData.append("screen_tech", screen_tech);
  formData.append("os_version", os_version);
  formData.append("size", size);

  try {
    const response = await axios.post(
      "http://localhost:8000/item/mobile/create/",
      formData,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response.data);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 400) {
        console.error(
          "There was a problem with the request. Check the data and headers."
        );
      } else {
        throw new Error(`HTTP error! status: ${error.response.status}`);
      }
    } else if (error.request) {
      throw new Error("No response was received");
    } else {
      throw error;
    }
  }
}

export default addPhone;
