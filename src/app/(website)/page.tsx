import Slider from "./components/Slider";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function Home() {
  return (
    <main className="min-h-screen mt-32 mx-10">
      <div className="w-full">
        <Slider />
      </div>
      <div className="mt-14 text-center">
        <h1 className="text-3xl font-bold">به فروشگاه ما خوش آمدید</h1>
        <p className="mt-4 text-lg">
          در اینجا می‌توانید بهترین محصولات را با بهترین قیمت‌ها پیدا کنید. ما
          به شما تجربه خریدی آسان و لذت‌بخش را ارائه می‌دهیم.
        </p>
      </div>

      <div className="bg-custom-gradient py-28">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center mb-2">
              <DiscountOutlinedIcon className="text-2xl mr-2 ml-4 text-primary" />
              <h2 className="text-2xl font-bold">تخفیف‌های ویژه</h2>
            </div>
            <p>
              از تخفیف‌های ویژه ما بهره‌مند شوید و محصولات مورد علاقه خود را با
              قیمت‌های استثنایی خریداری کنید.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center mb-2">
              <LocalShippingOutlinedIcon className="text-2xl mb-1 mr-2 ml-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">ارسال رایگان</h2>
            </div>
            <p>
              با خرید از فروشگاه ما، از ارسال رایگان به سراسر کشور بهره‌مند
              شوید.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center mb-2">
              <SupportAgentOutlinedIcon className="text-2xl mb-1 mr-2 ml-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">پشتیبانی ۲۴/۷</h2>
            </div>

            <p>
              تیم پشتیبانی ما به صورت ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی به
              سوالات و مشکلات شماست.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
