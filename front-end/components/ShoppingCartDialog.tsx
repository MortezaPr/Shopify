import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ShoppingCartDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>مشاهده</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center pr-10 pt-3 pb-5 text-2xl">
              سبد خرید
            </DialogTitle>
            <DialogDescription>
              <ol className="flex flex-col gap-5 ">
                <i className="p-5 bg-white dark:bg-dark-bg shadow-md w-full flex justify-start rounded-lg ">
                  لپ تاپ 13.6 اینچی اپل مدل MacBook Air M2 2022-16GB 256SSD
                </i>
                <i className="p-5 bg-white dark:bg-dark-bg shadow-md w-[29rem] truncate rounded-lg ">
                  گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256
                  گیگابایت و رم 8 گیگابایت - ویتنام
                </i>
                <i className="p-5 bg-white dark:bg-dark-bg shadow-md w-full flex justify-start rounded-lg ">
                  گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256
                  گیگابایت و رم 8 گیگابایت - ویتنام
                </i>
              </ol>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShoppingCartDialog;
