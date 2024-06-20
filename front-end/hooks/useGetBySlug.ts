import { useState, useEffect } from "react";
import { Product } from "@/types/Product";

const useGetBySlug = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/store/product/get-by-slug/${slug}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return { product, loading, error };
};

export default useGetBySlug;

// const useGetBySlug = (slug: string) => {};

// export default useGetBySlug;

// import iphone from "@/public/images/iphone.webp";
// import xiaomi from "@/public/images/xiaomei.webp";
// import samsung from "@/public/images/samsung.webp";
// import iphone2 from "@/public/images/iphone2.webp";
// import samsung2 from "@/public/images/samsung2.webp";

// let phones = [
//   {
//     pic: iphone,
//     title:
//       "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو TH/A (A2643) تک سیم کارت ظرفیت 256 گیگابایت رم 6 گیگابایت",
//     price: 85000000,
//     color: "مشکی",
//     id: 1,
//     slug: "iphone-13",
//   },
//   {
//     pic: xiaomi,
//     title: "گوشی موبايل شیائومی 13Ultra 5G ظرفیت 512 گیگابایت رم 16 گیگابایت",
//     price: 52351000,
//     color: "مشکی",
//     id: 2,
//     slug: "xiaomi-adv",
//   },
//   {
//     pic: samsung,
//     title:
//       "گوشی موبايل شیائومی گوشی موبایل سامسونگ گلکسی S23 Ultra 5G ظرفیت 256 گیگابایت رم 12 گیگابایت",
//     price: 47299000,
//     color: "مشکی",
//     id: 3,
//     slug: "samsung-dafa",
//   },
//   {
//     pic: iphone2,
//     title:
//       "گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت",
//     price: 35073000,
//     color: "مشکی",
//     id: 4,
//     slug: "iphone2-adg",
//   },
//   {
//     pic: iphone2,
//     title:
//       "گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت",
//     price: 35073000,
//     color: "مشکی",
//     id: 5,
//     slug: "iphone2-adgfs",
//   },
//   {
//     pic: samsung2,
//     title:
//       "گوشی موبايل سامسونگ مدل Galaxy Z Fold5 5G ظرفیت 512 گیگابایت رم 12 گیگابایت",
//     price: 69300000,
//     color: "مشکی",
//     id: 6,
//     slug: "samsung2-adj",
//   },
// ];
