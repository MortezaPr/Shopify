type Laptop = {
  name: string;
  price: number;
  image: {
    image_url: string;
    pic_id: string;
    product_id: number;
  };
  description: string;
  processor: string;
  ram: string;
  internalMemory: string;
  gpu: string;
  id: number;
  slug: string;
  color: string;
};

export default Laptop;
