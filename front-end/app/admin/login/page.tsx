"use client";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import ThemeToggle from "../../../components/ThemeToggle";
import localFont from "next/font/local";
import login from "@/actions/adminLogin";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

const poppins = localFont({
  src: "../../assets/fonts/Poppins-Bold.ttf",
  weight: "700",
  style: "bold",
});

const Login = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let { refresh, access } = await login(data.email, data.password);

    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    document.cookie = `access_token=${access}; path=/; HttpOnly; Secure; SameSite=Strict`;
    document.cookie = `refresh_token=${refresh}; path=/; HttpOnly; Secure; SameSite=Strict`;

    const access_token = localStorage.getItem("accessToken");
    console.log(access_token);

    router.push("/admin/dashboard");
  };

  return (
    <div>
      <div className="hidden md:flex justify-end pl-10 pt-5 ">
        <ThemeToggle />
      </div>
      <div className="h-[calc(100vh-44px)] flex justify-center items-center">
        <div className="bg-white dark:bg-dark-bg shadow-xl h-full w-full md:h-[450px] md:w-96 md:rounded-2xl flex flex-col items-center">
          <div className="md:hidden pt-3 w-full flex justify-end pl-3">
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-center">
            <p
              className={`${poppins.className} pt-10 font-bold text-5xl text-my-purple`}
            >
              Shopify
            </p>
            <p className="text-slate-500 pt-2">لطفا اطلاعات خود را وارد کنید</p>
          </div>
          <form
            className="flex flex-col items-center gap-5 pt-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder=" ایمیل"
                  className="p-2 rounded-md border border-slate-400 dark:border-none outline-none focus:outline-my-purple focus:border-none dark:text-white dark:bg-darker-bg w-80"
                />
              )}
            />

            <div className="relative w-80">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type={isVisible ? "text" : "password"}
                    placeholder="   کلمه عبور"
                    className="p-2 rounded-md border border-slate-400 dark:border-none dark:text-white outline-none focus:outline-my-purple focus:border-none w-full dark:bg-darker-bg"
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
            </div>

            <div className="pt-11">
              <Button size="xl" className="text-lg font-bold">
                ورود
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
