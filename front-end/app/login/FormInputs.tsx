import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import {
  MdVisibility,
  MdVisibilityOff,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { FormState, INITIAL, SIGN_IN_WITH_PASSWORD } from "./formStates";

type FormData = {
  phone_number: string;
  password: string;
  otp: string;
};

export const FormInputs = (
  formState: FormState,
  control: Control<FormData>
) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => setIsVisible(!isVisible);
  if (formState === INITIAL) {
    return (
      <Controller
        name="phone_number"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            dir="ltr"
            type="text"
            className="p-2 rounded-md border border-slate-400 dark:border-none outline-none focus:outline-my-purple focus:border-none dark:text-white dark:bg-[#141517] w-96"
          />
        )}
      />
    );
  } else if (formState === SIGN_IN_WITH_PASSWORD) {
    return (
      <div className="relative">
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              dir="ltr"
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
          name="otp"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              dir="ltr"
              type="text"
              className="p-2 rounded-md border border-slate-400 dark:border-none outline-none focus:outline-my-purple focus:border-none dark:text-white dark:bg-[#141517] w-96"
            />
          )}
        />
      </div>
    );
  }
};
