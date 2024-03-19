import React from "react";
import { Controller, Control } from "react-hook-form";
import {
  MdVisibility,
  MdVisibilityOff,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { FormState } from "./formStates";

type FormData = {
  phone_number: string;
  password: string;
  otp_code: string;
};

export const formInputs = (
  formState: FormState,
  control: Control<FormData>,
  isVisible: boolean,
  handleVisibility: () => void
) => {
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
