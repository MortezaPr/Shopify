"use client";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import CustomInput from "./components/CustomInput";
import { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import inputFields from "./components/InputFields";
import provincesWithCities from "@/utils/provincesWithCities";
import provinces from "@/utils/provinces";
import InputComponent from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";

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

export default function SubmitPurchasePage() {
  const [cities, setCities] = useState<string[]>([]);

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
    setCities(provincesWithCities[province] || []);
  };

  return (
    <main className="w-full h-screen mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="flex flex-col mg:grid mg:place-items-center gap-10">
            {inputFields.map((field) => (
              <InputComponent
                key={field.inputName}
                register={register}
                errors={errors}
                inputName={field.inputName}
                label={field.label}
                validation={field.validation}
              />
            ))}
            <SelectComponent
              label="استان"
              name="province"
              control={control}
              options={provinces}
              handleChange={handleProvinceChange}
            />
            <SelectComponent
              label="شهرستان"
              name="city"
              control={control}
              options={cities}
            />
            <div className="w-full flex flex-col gap-3 items-center col-span-2">
              <label className="font-bold">آدرس</label>
              <div className="w-full">
                <CustomInput
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
            <div className="w-full mg:w-3/5 flex col-span-2 pb-10">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ height: "3rem" }}
              >
                <p className="font-bold text-lg">تایید</p>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
