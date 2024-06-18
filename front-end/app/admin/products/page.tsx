"use client";
import addLaptop from "@/actions/addLaptop";
import addPhone from "@/actions/addPhone";
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
import { useForm } from "react-hook-form";
import Forms from "./utils/Forms";

const Products = () => {
  const [selectedValue, setSelectedValue] = useState("phone");
  const { isOpen } = useSidebarToggle();
  type Inputs = {
    name: string;
    price: number;
    image: File;
    resolution: string;
    screen_tech: string;
    os_version: string;
    size: string;
    processor: string;
    ram: string;
    internalMemory: string;
    gpu: string;
    description: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const handleSubmitForm = (data: Inputs) => {
    if (selectedValue == "phone") {
      addPhone(data);
    } else {
      addLaptop(data);
    }
  };

  return (
    <div
      className={`h-screen w-screen pr-14  ${
        isOpen ? "md:pr-40" : "md:pr-52"
      } pt-28`}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex justify-start text-white rounded-lg">
            اضافه کردن محصول
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[725px] max-h-[100vh] overflow-auto">
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
          <form onSubmit={handleSubmit(handleSubmitForm)}>
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
                    <Label htmlFor="r3">لپتاپ:</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="r2" />
                    <Label htmlFor="r2">موبایل:</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center gap-5">
                <Label htmlFor="name" className="text-right">
                  * نام محصول:
                </Label>
                <Input
                  className="w-96"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                  {...register("name")}
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="price" className="text-right">
                  * قیمت (تومان):
                </Label>
                <Input className="w-52" {...register("price")} />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="image">تصویر محصول:</Label>
                <Input
                  id="image"
                  type="file"
                  className="w-52 border cursor-pointer py-2"
                  {...register("image")}
                />
              </div>
              {selectedValue === "phone"
                ? Forms("phone", register)
                : Forms("laptop", register)}
              <div className="flex items-center gap-5">
                <Label htmlFor="description" className="text-right">
                  توضیحات:
                </Label>
                <Textarea
                  className="border-gray-400 focus:outline-none"
                  {...register("description")}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-52 ">
                ثبت
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
