import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DarkMode from "./DarkMode";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    <div>
      <div className="hidden md:flex justify-end pl-10 pt-5 ">
        <DarkMode />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white dark:bg-dark-bg shadow-xl h-full w-full md:h-[450px] md:w-96 md:rounded-2xl flex flex-col items-center">
          <div className="md:hidden pt-3 w-full flex justify-end pl-3">
            <DarkMode />
          </div>
          <div className="flex flex-col items-center">
            <p
              className="pt-10 font-bold text-5xl text-my-purple"
              style={{ fontFamily: "Roboto" }}
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
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="   نام کاربری"
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
                    type={showPassword ? "text" : "password"}
                    placeholder="   کلمه عبور"
                    className="p-2 rounded-md border border-slate-400 dark:border-none dark:text-white outline-none focus:outline-my-purple focus:border-none w-full dark:bg-darker-bg"
                  />
                )}
              />
              <InputAdornment position="end" className="absolute top-5 left-0 ">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? (
                    <div className="dark:text-white">
                      <VisibilityIcon />
                    </div>
                  ) : (
                    <div className="dark:text-white">
                      <VisibilityOffIcon />
                    </div>
                  )}
                </IconButton>
              </InputAdornment>
            </div>

            <div className="pt-11">
              <Button type="submit" variant="contained" style={buttonStyle}>
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
