"use client";
import localFont from "next/font/local";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const poppins = localFont({
  src: "../../../../public/fonts/Poppins-Bold.ttf",
});

type FormData = {
  email: string;
  password?: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Define the regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (emailPattern.test(data.email)) {
      setIsEmailValid(true);
      // Proceed with the existing if statement
      if (data.email !== "" && !showPasswordInput) {
        setShowPasswordInput(true);
      }
    } else {
      // Handle invalid email case (optional)
      setIsEmailValid(false);
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
            <p className="pt-2">لطفا ایمیل خود را وارد کنید</p>
          </div>
        </div>

        <form
          className="flex flex-col mx-10 pt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div dir="rtl">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              autoComplete="email"
              autoFocus
              error={!isEmailValid}
              helperText={!isEmailValid ? "ایمیل نادرست است" : ""}
              {...register("email")}
              dir="rtl"
            />

            {showPasswordInput && (
              <TextField
                margin="normal"
                fullWidth
                label="رمز عبور"
                type="password"
                id="password"
                {...register("password")}
              />
            )}
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "2rem",
              height: "3.5rem",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}
