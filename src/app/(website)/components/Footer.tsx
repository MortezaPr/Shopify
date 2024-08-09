import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient mt-10 py-10 text-white">
      <div className="container mx-auto px-8 grid grid-cols-2 md:grid-cols-4 place-items-center gap-14 md:gap-8">
        <div>
          <h5 className="text-lg xs:text-xl font-bold mb-4">خدمات مشتریان</h5>
          <ul className="space-y-2 text-xs xs:text-sm">
            <li>
              <a href="#">تماس با پشتیبانی</a>
            </li>
            <li>
              <a href="#">قوانین و مقررات</a>
            </li>
            <li>
              <a href="#">حریم خصوصی</a>
            </li>
            <li>
              <a href="#">پیگیری سفارش</a>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h5 className="text-lg xs:text-xl font-bold mb-4">امور فروشندگان</h5>
          <ul className="space-y-2 text-xs xs:text-sm">
            <li>
              <a href="#">ثبت فروشگاه جدید</a>
            </li>
            <li>
              <a href="#">اپلیکیشن فروشندگان</a>
            </li>
            <li>
              <a href="#">درخواست پشتیبانی</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg xs:text-xl font-bold mb-4">همراه با Shopify</h5>
          <ul className="space-y-2 text-xs xs:text-sm">
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">ارتباط با ما</a>
            </li>
            <li>
              <a href="#">مجوز و نمادها</a>
            </li>
            <li>
              <a href="#">وبلاگ</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h5 className="text-lg xs:text-xl font-bold mb-4">ما را دنبال کنید</h5>
          <div className="flex gap-3 cursor-pointer">
            <InstagramIcon />
            <XIcon />
            <FacebookIcon />
            <TelegramIcon />
          </div>
          <div className="mt-5 flex flex-col items-center gap-3">
            <p className="xs:text-lg font-bold">عضویت در خبرنامه</p>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                className="w-full rounded-md bg-gray-100 py-[0.4rem] pl-10 pr-2 outline-none text-black"
                placeholder="آدرس ایمیل ..."
              />
              <ArrowBackIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm border-t border-gray-200 pt-4">
        <p>© ۱۴۰۳ - کلیه حقوق مادی و معنوی این سایت متعلق به Shopify است.</p>
      </div>
    </footer>
  );
}
