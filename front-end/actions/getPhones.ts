import iphone from "@/public/images/iphone.webp";
import xiaomi from "@/public/images/xiaomei.webp";
import samsung from "@/public/images/samsung.webp";
import iphone2 from "@/public/images/iphone2.webp";
import samsung2 from "@/public/images/samsung2.webp";

let phones = [
  {
    image: iphone,
    name: "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو TH/A (A2643) تک سیم کارت ظرفیت 256 گیگابایت رم 6 گیگابایت",
    price: 85000000,
    color: "مشکی",
    id: 1,
    slug: "iphone-13",
  },
  {
    image: xiaomi,
    name: "گوشی موبايل شیائومی 13Ultra 5G ظرفیت 512 گیگابایت رم 16 گیگابایت",
    price: 52351000,
    color: "مشکی",
    id: 2,
    slug: "xiaomi-adv",
  },
  {
    image: samsung,
    name: "گوشی موبايل شیائومی گوشی موبایل سامسونگ گلکسی S23 Ultra 5G ظرفیت 256 گیگابایت رم 12 گیگابایت",
    price: 47299000,
    color: "مشکی",
    id: 3,
    slug: "samsung-dafa",
  },
  {
    image: iphone2,
    name: "گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت",
    price: 35073000,
    color: "مشکی",
    id: 4,
    slug: "iphone2-adg",
  },
  {
    image: iphone2,
    name: "گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت",
    price: 35073000,
    color: "مشکی",
    id: 5,
    slug: "iphone2-adgfs",
  },
  {
    image: samsung2,
    name: "گوشی موبايل سامسونگ مدل Galaxy Z Fold5 5G ظرفیت 512 گیگابایت رم 12 گیگابایت",
    price: 69300000,
    color: "مشکی",
    id: 6,
    slug: "samsung2-adj",
  },
];

//TODO instead of this function we should use a server to get data

const getPhones = () => {
  return phones;
};

export default getPhones;
