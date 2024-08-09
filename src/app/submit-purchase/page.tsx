"use client";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import InputComponent from "./components/InputComponent";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  postalCode: string;
  province: string;
  city: string;
  address: string;
};

const provincesWithCities: { [key: string]: string[] } = {
  تهران: ["تهران", "کرج", "شهریار"],
  اصفهان: ["اصفهان", "کاشان", "نجف‌آباد"],
  فارس: ["شیراز", "مرودشت", "فسا"],
  "خراسان رضوی": ["مشهد", "نیشابور", "سبزوار"],
  مازندران: ["ساری", "بابلسر", "آمل", "بابل"],
  گیلان: ["رشت", "لاهیجان", "سیاهکل"],
  کرمان: ["کرمان", "رفسنجان", "بم"],
  خوزستان: ["اهواز", "آبادان", "خرمشهر"],
  گلستان: ["گرگان", "علی‌آباد", "مینودشت"],
  اردبیل: ["اردبیل", "مشگین‌شهر", "نمین"],
  یزد: ["یزد", "مهریز", "خاتم"],
  همدان: ["همدان", "اسدآباد", "کبودراهنگ"],
  "چهارمحال و بختیاری": ["شهرکرد", "فارسان", "کوهرنگ"],
  لرستان: ["خرم‌آباد", "بروجرد", "الیگودرز"],
  بوشهر: ["بوشهر", "دیّر", "کنگان"],
  "آذربایجان غربی": ["ارومیه", "خوی", "سردشت"],
  "آذربایجان شرقی": ["تبریز", "مراغه", "اهر"],
  زنجان: ["زنجان", "خدابنده", "ایجرود"],
  قزوین: ["قزوین", "تاکستان", "آلاد"],
  قم: ["قم", "کاشان", "نوش‌آباد"],
};

export default function SubmitPurchasePage() {
  const [provinces, setProvinces] = useState(Object.keys(provincesWithCities));
  const [cities, setCities] = useState<string[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  const [address, setAddress] = useState("");
  const [position, setPosition] = useState<[number, number] | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const handleSuccess = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setPosition([latitude, longitude]);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=fa`
      );
      const data = await response.json();
      setAddress(data.display_name);
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error("Error getting location:", error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleProvinceChange = (event: SelectChangeEvent<string>) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setCities(provincesWithCities[province] || []);
  };

  return (
    <main className="w-full h-screen mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="flex flex-col mg:grid mg:place-items-center gap-10">
            <div className="flex flex-col gap-3 items-center">
              <label className="font-bold">نام</label>
              <div className="w-80 xs:w-96">
                <InputComponent
                  fullWidth
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <label className="font-bold">نام خانوادگی</label>
              <div className="w-80 xs:w-96">
                <InputComponent
                  fullWidth
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <label className="font-bold">شماره موبایل</label>
              <div className="w-80 xs:w-96">
                <InputComponent
                  fullWidth
                  {...register("phoneNumber", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <label className="font-bold">کد پستی</label>
              <div className="w-80 xs:w-96">
                <InputComponent
                  fullWidth
                  {...register("postalCode", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <label className="font-bold">استان</label>
              <div className="w-80 xs:w-96">
                <Controller
                  name="province"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      onChange={(e) => {
                        handleProvinceChange(e);
                        field.onChange(e);
                      }}
                      input={<InputComponent fullWidth />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {provinces.map((province) => (
                        <MenuItem key={province} value={province}>
                          {province}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <label className="font-bold">شهرستان</label>
              <div className="w-80 xs:w-96">
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} input={<InputComponent fullWidth />}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {cities.map((city) => (
                        <MenuItem key={city} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 items-center col-span-2">
              <label className="font-bold">آدرس</label>
              <div className="w-full">
                <InputComponent
                  multiline={true}
                  rows={2}
                  fullWidth
                  {...register("address", {
                    required: "This field is required",
                  })}
                  value={address}
                />
              </div>
            </div>
            <div className="w-full col-span-2">
              <Map
                position={position}
                setAddress={setAddress}
                setPosition={setPosition}
              />
            </div>
            <div className="w-full col-span-2 pb-10">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ height: "3rem" }}
              >
                <p className="font-bold">تایید</p>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
