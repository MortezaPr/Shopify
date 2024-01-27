"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import useSidebarToggle from "@/hooks/useSidebarToggle";
import { useState } from "react";

const phone_form = (
  <div className="grid gap-4">
    <div className="flex items-center gap-5">
      <Label htmlFor="resolution" className="text-right">
        رزولوشن
      </Label>
      <Input id="resolution" className="w-64" />
    </div>
    <div className="flex items-center gap-5">
      <Label htmlFor="screen_tech" className="text-right">
        تکنولوژی صفحه نمایش
      </Label>
      <Input id="screen_tech" className="w-64" />
    </div>
    <div className="flex items-center gap-5">
      <Label htmlFor="os_version" className="text-right">
        نسخه سیستم عامل
      </Label>
      <Input id="os_version" className="w-64" />
    </div>
    <div className="flex items-center gap-5">
      <Label htmlFor="size" className="text-right">
        اندازه
      </Label>
      <Input id="size" className="w-64" />
    </div>
  </div>
);

const laptop_form = (
  <div className="grid gap-4">
    {" "}
    <div className="flex items-center gap-5">
      <Label htmlFor="processor" className="text-right">
        پردازنده
      </Label>
      <Input id="processor" className="w-64" />
    </div>
    <div className="flex items-center gap-5">
      <Label htmlFor="ram" className="text-right">
        رم
      </Label>
      <Input id="ram" className="w-64" />
    </div>
    <div className="flex items-center gap-5">
      <Label htmlFor="internal_memory" className="text-right">
        حافظه داخلی
      </Label>
      <Input id="internal_memory" className="w-64" />
    </div>
    <div className="flex items-center gap-5">
      <Label htmlFor="gpu" className="text-right">
        کارت گرافیک
      </Label>
      <Input id="gpu" className="w-64" />
    </div>
  </div>
);

const Products = () => {
  const [selectedValue, setSelectedValue] = useState("phone");
  const { isOpen } = useSidebarToggle();
  return (
    <div
      className={`h-screen w-screen pr-14  ${
        isOpen ? "md:pr-40" : "md:pr-52"
      } pt-28`}
    >
      <div className="">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex justify-start text-white text-lg rounded-lg">
              اضافه کردن محصول
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <div className="flex justify-start pr-10">
                <DialogTitle className="text-xl">اطلاعات محصول</DialogTitle>
              </div>
              <div className="flex justify-start pr-10">
                <DialogDescription>
                  پر کردن همه ی فیلد های ستاره دار الزامی هستند
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="grid gap-4 py-4 items-start">
              <div className="flex py-2">
                <RadioGroup
                  defaultValue="phone"
                  className="flex gap-10"
                  value={selectedValue}
                  onValueChange={setSelectedValue}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="laptop" id="r3" />
                    <Label htmlFor="r3">لپتاپ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="r2" />
                    <Label htmlFor="r2">موبایل</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="title" className="text-right">
                  * نام محصول
                </Label>
                <Input id="title" className="w-96" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="price" className="text-right">
                  * قیمت (تومان)
                </Label>
                <Input id="title" className="w-52" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="picture">تصویر محصول</Label>
                <Input
                  id="picture"
                  type="file"
                  className="w-52 border cursor-pointer py-2"
                />
              </div>
              {selectedValue === "phone" ? phone_form : laptop_form}
              <div className="flex items-center gap-5">
                <Label htmlFor="description" className="text-right">
                  توضیحات
                </Label>
                <Textarea className="border-gray-400" />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="w-52 ">
                ثبت
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Products;
