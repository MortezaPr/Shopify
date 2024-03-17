"use client";
import { use, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import ThemeToggle from "../../components/ThemeToggle";
import { IoMdArrowForward } from "react-icons/io";
import {
  MdVisibility,
  MdVisibilityOff,
  MdKeyboardArrowLeft,
} from "react-icons/md";

import checkUser from "@/actions/checkUser";
import createUser from "@/actions/createUser";
import verifyUser from "@/actions/verifyUser";
import checkPassword from "@/actions/checkPassword";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

type FormData = {
  phone_number: string;
  password: string;
  otp_code: string;
};

const Login = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const [formState, setFormState] = useState("initial");
  const [isVisible, setIsVisible] = useState(false);

  const showCase = () => {
    if (formState === "initial") {
      return "ورود | ثبت نام";
    } else if (formState === "signInWithPassword") {
      return "رمز عبور را وارد کنید";
    } else if (formState === "signUp" || formState === "signInWithOTP") {
      return "کد تایید را وارد کنید";
    }
  };

  const backward = () => {
    setFormState("initial");
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (formState === "initial") {
      const userStatus = await checkUser(data.phone_number);
      console.log(userStatus);

      if (!userStatus.exists) {
        await createUser(data.phone_number);
        setFormState("signUp");
      } else {
        if (!userStatus.is_verified) {
          setFormState("signUp");
        } else {
          if (userStatus.password_set) {
            console.log("here");
            setFormState("signInWithPassword");
          } else {
            setFormState("signInWithOTP");
          }
        }
      }
    } else if (formState === "signInWithPassword") {
      // check password
      const result = await checkPassword(data.phone_number, data.password);
      console.log(result);
    } else {
      await verifyUser(data.phone_number, data.otp_code);
    }
  };

  const showInput = () => {
    if (formState === "initial") {
      return (
        <Controller
          name="phone_number"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="p-2 rounded-md border border-slate-400 dark:border-none outline-none focus:outline-my-purple focus:border-none dark:text-white dark:bg-[#141517] w-96"
            />
          )}
        />
      );
    } else if (formState === "signInWithPassword") {
      return (
        <div className="relative">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type={isVisible ? "text" : "password"}
                placeholder="   کلمه عبور"
                className="p-2 rounded-md border border-slate-400 dark:border-none dark:text-white outline-none focus:outline-my-purple focus:border-none w-full dark:bg-[#141517]"
              />
            )}
          />
          <div
            className="absolute top-2 left-3 cursor-pointer"
            onClick={handleVisibility}
          >
            {isVisible ? (
              <MdVisibilityOff size={20} />
            ) : (
              <MdVisibility size={20} />
            )}
          </div>
          <p className="flex items-center text-cyan-700 text-sm cursor-pointer mt-5">
            فراموشی رمز
            <MdKeyboardArrowLeft />
          </p>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <Controller
            name="otp_code"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="p-2 rounded-md border border-slate-400 dark:border-none outline-none focus:outline-my-purple focus:border-none dark:text-white dark:bg-[#141517] w-96"
              />
            )}
          />
        </div>
      );
    }
  };

  return (
    <div className="dark:bg-darker-user">
      <div className="hidden md:flex justify-end pl-10 pt-5 ">
        <ThemeToggle />
      </div>
      <div className="h-[calc(100vh-44px)] flex justify-center items-center">
        <div className="bg-white dark:bg-dark-user shadow-sm h-full w-full md:h-[30rem] md:w-[27rem] md:rounded-2xl flex flex-col border-[1.5px] border-gray-200 dark:border-[#141517]">
          <div className="md:hidden pt-3 w-full flex justify-end pl-3">
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-center pt-28 md:pt-10 relative">
            <div
              className="absolute right-14 sm:right-32 md:right-7 text-gray-500 cursor-pointer"
              onClick={backward}
            >
              {formState !== "initial" ? <IoMdArrowForward size={25} /> : ""}
            </div>
            <p
              className={`${poppins.className}  font-bold text-5xl text-my-purple`}
            >
              Shopify
            </p>
          </div>

          <div className="flex flex-col mx-auto">
            <p className="pt-16 md:pt-10 text-xl font-semibold">{showCase()}</p>
            <div className="py-5 flex flex-col justify-start gap-2 text-sm text-slate-500">
              {formState === "initial" && (
                <div>
                  <p>سلام!</p>
                  <p>لطفا شماره موبایل خود را وارد کنید</p>
                </div>
              )}
              {formState === "signUp" && (
                <div>
                  <p>حساب کاربری وجود ندارد.</p>
                  <p> برای ساخت حساب جدید، کد تایید ارسال گردید.</p>
                </div>
              )}
            </div>

            <form
              className="flex flex-col gap-8 pt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              {showInput()}

              <div>
                <Button className="text-base font-bold w-96">ورود</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
