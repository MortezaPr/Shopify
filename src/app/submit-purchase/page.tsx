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
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/store/shoppingCartSlice";
import CircularProgress from "@mui/material/CircularProgress";

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
  const router = useRouter();
  const dispatch = useDispatch();
  const [cities, setCities] = useState<string[]>([]);
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
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
      setValue("address", data.display_name);
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error("Error getting location:", error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      dispatch(clearCart());
      toast.success("سفارش شما با موفقیت ثبت شد!");
    }, 1000);

    setTimeout(() => {
      router.push("/");
    }, 2000);
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
                />
              </div>
            </div>
            <div className="w-full col-span-2">
              <Map
                position={position}
                setAddress={(address) => setValue("address", address)}
                setPosition={setPosition}
              />
            </div>
            <div className="w-full mg:w-3/5 flex col-span-2 pb-10">
              <Button
                disabled={isLoading}
                fullWidth
                type="submit"
                variant="contained"
                sx={{ height: "3rem" }}
              >
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <p className="font-bold text-lg">تایید</p>
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </main>
  );
}
