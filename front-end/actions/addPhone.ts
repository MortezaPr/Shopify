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
  // const access_token = localStorage.getItem("accessToken");

  const formData1 = new FormData();
  formData1.append("name", name);
  formData1.append("price", price.toString());
  formData1.append("description", description);
  formData1.append("resolution", resolution);
  formData1.append("screen_tech", screen_tech);
  formData1.append("os_version", os_version);
  formData1.append("size", size);

  const formData2 = new FormData();

  try {
    const response = await axios.post(
      "http://localhost:8000/store/product/mobile/create/",
      formData1
      // {
      //   headers: {
      //     Authorization: `Bearer ${access_token}`,
      //   },
      // }
    );
    const phoneId = response.data.id;
    formData2.append("product_id", phoneId);
    formData2.append("picture", image[0]);

    try {
      const response2 = await axios.post(
        "http://localhost:8000/media/upload-media/",
        formData2
        // {
        //   headers: {
        //     Authorization: `Bearer ${access_token}`,
        //   },
        // }
      );
    } catch (error: any) {
      console.log("error in uploading image");
    }
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
