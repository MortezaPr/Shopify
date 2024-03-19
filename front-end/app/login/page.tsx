"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";
import ThemeToggle from "../../components/ThemeToggle";
import { IoMdArrowForward } from "react-icons/io";
import Form from "./Form";

import { FormState, INITIAL, MESSAGES } from "./formStates";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Login = () => {
  const [formState, setFormState] = useState<FormState>(INITIAL);

  const showCase = () => MESSAGES[formState] || "";

  const backward = () => setFormState(INITIAL);

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
              {formState !== INITIAL ? <IoMdArrowForward size={25} /> : ""}
            </div>
            <p
              className={`${poppins.className}  font-bold text-5xl text-my-purple`}
            >
              Shopify
            </p>
          </div>

          <div className="flex flex-col mx-auto">
            <p className="pt-16 md:pt-10 text-xl font-semibold">{showCase()}</p>
            <Form formState={formState} setFormState={setFormState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
