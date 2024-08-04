"use client";
import { login } from "@/api/login";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const poppins = localFont({
  src: "../../../../public/fonts/Poppins-Bold.ttf",
});

type FormData = {
  username: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    if (data.username && data.password) {
      try {
        await login(data.username, data.password);
        toast.success("شما با موفقیت وارد شدید!");
        setIsLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (error) {
        setIsLoading(false);
        toast.error("نام کاربری یا رمز عبور اشتباه است!");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-screen xs:h-144 w-112 rounded-xl bg-white dark:bg-secondary-dark border-[0.5px] border-gray-200 dark:border-secondary-dark shadow-sm">
        <h1
          className={`${poppins.className} text-primary flex justify-center pt-40 xs:pt-12`}
        >
          Shopify
        </h1>
        <div className="pr-10 pt-10 ">
          <p className="text-xl font-semibold">ورود | ثبت‌نام</p>
          <div className="text-gray-500 pt-5 text-sm">
            <p>سلام!</p>
            <p className="pt-2">لطفا نام کاربری و رمز عبور خود را وارد کنید</p>
          </div>
        </div>
        <form
          className="flex flex-col mx-10 pt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div dir="rtl">
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="نام کاربری"
              autoFocus
              {...register("username", { required: "نام کاربری الزامی است" })}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
              dir="rtl"
            />

            <TextField
              margin="normal"
              fullWidth
              label="رمز عبور"
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: "رمز عبور الزامی است" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            sx={{
              marginTop: "2rem",
              height: "3.5rem",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {isLoading ? (
              <ClipLoader
                color="gray"
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "ورود"
            )}
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
