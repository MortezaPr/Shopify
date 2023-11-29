"use client";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import DarkMode from "../admin/components/ThemeToggle";

const pacifico = Poppins({
  weight: "700",
  subsets: ["latin"],
});

type FormData = {
  username: string;
  password: string;
};

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const buttonStyle = {
    backgroundColor: "#5664d2",
    fontFamily: "VazirFont",
    width: "320px",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    borderRadius: "10px",
  };

  return (
    <div className="dark:bg-darker-user">
      <div className="hidden md:flex justify-end pl-10 pt-5 ">
        <DarkMode />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white dark:bg-dark-user shadow-xl h-full w-full md:h-[27rem] md:w-96 md:rounded-2xl flex flex-col">
          <div className="md:hidden pt-3 w-full flex justify-end pl-3">
            <DarkMode />
          </div>
          <div className="flex flex-col items-center">
            <p
              className={`${poppins.className} pt-28 md:pt-10 font-bold text-5xl text-my-purple`}
            >
              Shopify
            </p>
          </div>

          <div className="flex flex-col mx-auto">
            <p className="pt-14 md:pt-7 text-xl font-semibold">
              ورود | ثبت نام
            </p>
            <div className="py-5 flex flex-col justify-start gap-2 text-sm text-slate-500">
              <p>سلام!</p>
              <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
            </div>
            <form
              className="flex flex-col gap-8 pt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="p-2 rounded-md border border-slate-400 dark:border-none outline-none focus:outline-my-purple focus:border-none dark:text-white dark:bg-[#141517] w-80"
                  />
                )}
              />

              <div>
                <Button className="text-base font-bold w-80">
                  ورود
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
