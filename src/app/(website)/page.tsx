import Slider from "./components/Slider";
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiKeyReturnBold } from "react-icons/pi";
import localFont from "next/font/local";
import Products from "./components/Products";
import ProductsPagination from "./components/Pagination";

const poppins = localFont({
  src: "../../../public/fonts/Poppins-Bold.ttf",
});

const boxes = [
  {
    name: "تخفیف‌های ویژه",
    icon: MdOutlineDiscount,
    description:
      "از تخفیف‌های ویژه ما بهره‌مند شوید و محصولات مورد علاقه خود را با قیمت‌های استثنایی خریداری کنید.",
  },
  {
    name: "ارسال رایگان",
    icon: TbTruckDelivery,
    description:
      "با خرید از فروشگاه ما، از ارسال رایگان به سراسر کشور بهره‌مند شوید.",
  },
  {
    name: "پشتیبانی ۲۴/۷",
    icon: MdOutlineSupportAgent,
    description:
      "تیم پشتیبانی ما به صورت ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی به سوالات و مشکلات شماست.",
  },
  {
    name: "بازگشت آسان",
    icon: PiKeyReturnBold,
    description:
      "شما می‌توانید به راحتی و بدون هیچ مشکلی کالای خود را بازگردانید و مبلغ خود را دریافت کنید.",
  },
];

export default function Home({
  searchParams = {},
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="min-h-screen mt-32 mx-10">
      <div className="w-full">
        <Slider />
      </div>
      <div className="mt-14 text-center">
        <h1 className="text-3xl font-bold">
          به فروشگاه بزرگ{" "}
          <span className={`text-primary ${poppins.className}`}>Shopify</span>{" "}
          خوش آمدید
        </h1>
        <p className="mt-4 text-lg">
          در اینجا می‌توانید بهترین محصولات را با بهترین قیمت‌ها پیدا کنید. ما
          به شما تجربه خریدی آسان و لذت‌بخش را ارائه می‌دهیم.
        </p>
      </div>

      <div className="bg-custom-gradient pb-28 pt-11">
        <div className="w-full grid place-items-center">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%]">
            {boxes.map((box, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center mb-2">
                  <box.icon className="text-2xl mb-2 mr-2 ml-4 text-primary" />
                  <h2 className="text-lg xs:text-2xl font-bold mb-2">
                    {box.name}
                  </h2>
                </div>
                <p>{box.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Products searchParams={searchParams} />
      <ProductsPagination />
    </main>
  );
}
