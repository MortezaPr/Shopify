"use client";

import { BsSortUpAlt } from "react-icons/bs";
import getPhones from "@/actions/getPhones";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useTheme } from "next-themes";

import Card from "@/components/Card";
import { useEffect, useState } from "react";

const Search = () => {
  const items = getPhones();
  const brands_english = {
    Apple: "اپل",
    Samsung: "سامسونگ",
    Xiaomi: "شیائومی",
    Huawei: "هوآوی",
    Nokia: "نوکیا",
    Motorola: "موتورولا",
    Honor: "آنر",
    Lenovo: "لنوو",
    ASUS: "ایسوس",
    HP: "اچ پی",
    Acer: "ایسر",
  };

  const { resolvedTheme } = useTheme();

  const [checkedValues, setCheckedValues] = useState({});
  const [leastValue, setLeastValue] = useState(0);
  const [mostValue, setMostValue] = useState(200000000);

  useEffect(() => {
    // This code will run whenever `checkedValues` changes

    //TODO filter the result when the checkedValues changes
    console.log(checkedValues);
  }, [checkedValues]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValues({
      ...checkedValues,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="h-screen w-full pt-28 lg:pt-36">
      <div className="hidden lg:flex gap-4 pb-4 pr-[19rem]">
        <div>
          <BsSortUpAlt size={23} />
        </div>
        <button className="text-sm font-bold text-my-purple">جدیدترین</button>
        <button className="text-sm text-gray-500">پرفروش ترین</button>
        <button className="text-sm text-gray-500">گران ترین</button>
        <button className="text-sm text-gray-500">ارزان ترین</button>
      </div>
      <div className="w-[calc(100vw-17px)] flex lg:gap-5 sm:pr-8 md:pr-5">
        <div className="hidden lg:block max-h-[40rem] w-80 bg-white dark:bg-dark-user border-[1px] border-gray-300 dark:border-neutral-800 rounded">
          <h3 className="text-lg font-bold pr-6 pt-5">فیلترها</h3>
          <div className="flex justify-center">
            <div className="h-[1.5px] w-60 rounded-xl bg-gray-300 mt-2"></div>
          </div>
          <div className="px-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>برند</AccordionTrigger>

                <AccordionContent>
                  <div className="max-h-52 overflow-y-auto">
                    {Object.entries(brands_english).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <Checkbox
                          name={key}
                          checked={
                            checkedValues[key as keyof typeof checkedValues] ||
                            false
                          }
                          onChange={handleChange}
                          sx={{
                            color: resolvedTheme == "dark" ? "white" : "black",
                          }}
                        />
                        <div className="w-full flex justify-between">
                          <p className="font-bold">{value}</p>
                          <p className="pl-4 text-xs text-gray-500">{key}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <div className="">
                  <AccordionTrigger>محدوده قیمت</AccordionTrigger>
                </div>
                <AccordionContent>
                  <div className="flex flex-col gap-10">
                    <div className="flex">
                      <TextField
                        value={leastValue.toLocaleString("fa")}
                        id="standard-basic"
                        label="حداقل قیمت"
                        variant="standard"
                        sx={{
                          "& label.MuiInputLabel-root": {
                            fontFamily: "IranSans",
                          },
                          "& input": {
                            fontFamily: "IranSans",
                          },
                          width: "10rem",
                        }}
                      />
                      <p className="pt-8 pr-5">تومان</p>
                    </div>
                    <div className="flex">
                      <TextField
                        value={mostValue.toLocaleString("fa")}
                        id="standard-basic"
                        label="حداکثر قیمت"
                        variant="standard"
                        sx={{
                          "& label.MuiInputLabel-root": {
                            fontFamily: "IranSans",
                          },
                          "& input": {
                            fontFamily: "IranSans",
                          },
                          width: "10rem",
                        }}
                      />
                      <p className="pt-8 pr-5">تومان</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="w-[calc(100vw-50px)] flex justify-center lg:justify-normal">
          <div className="w-full md:w-[41rem] lg:w-[38.5rem] desktop1:w-[55rem] desktop2:w-[70rem] 2xl:w-[87.5rem] grid place-items-center gap-5 md:grid-cols-2 lg:grid-cols-2 desktop1:grid-cols-3 desktop2:grid-cols-4 2xl:grid-cols-5 pb-28">
            {items.map((item, index) => (
              <Link href={`/product/${item.slug}`} key={item.id}>
                <Card image={item.image} name={item.name} price={item.price} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
