import Laptop from "../types/Laptop";
import axios from "axios";

async function addLaptop({
  title,
  price,
  color,
  image,
  description,
  processor,
  ram,
  internalMemory,
  gpu,
}: Laptop) {
  // const access_token = localStorage.getItem("accessToken");

  const formData1 = new FormData();
  formData1.append("title", title);
  formData1.append("price", price.toString());
  formData1.append("color", color);
  formData1.append("description", description);
  formData1.append("processor", processor);
  formData1.append("ram", ram);
  formData1.append("internal_memory", internalMemory);
  formData1.append("GPU", gpu);

  const formData2 = new FormData();

  try {
    const response = await axios.post(
      "http://localhost:8000/store/product/laptop/create/",
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

export default addLaptop;
