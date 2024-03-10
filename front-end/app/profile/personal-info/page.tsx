"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";
import Forms from "./components/Forms";
import InfoCard from "./components/InfoCard";

const lg_class =
  "shadow-sm border-[1.5px] border-gray-200 dark:border-none col-span-5 rounded-lg";

const PersonalInfo = () => {
  const full_name = "مرتضی پوررمضان";
  const phone_number = "09123456789";
  const email = "pourramzanmorteza@gmail.com";
  const password = "12345678";

  type Inputs = {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    old_password?: string;
    new_password?: string;
    new_password_confirmation?: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const handleSubmitForm = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div
      className={`h-screen lg:h-auto lg:mx-0 lg:mt-0 bg-[#f1f5f7] dark:bg-darker-user flex flex-col lg:${lg_class} lg:bg-white lg:dark:bg-dark-user`}
    >
      <div className="lg:hidden bg-white dark:bg-dark-user flex items-center gap-3 pr-5">
        <Link href={"/profile"}>
          <IoArrowForward size={22} />
        </Link>

        <div>
          <h2 className="py-5 text-base">اطلاعات حساب کاربری</h2>
        </div>
      </div>

      <div className="hidden lg:block pr-5">
        <h1 className="pt-5 text-lg">اطلاعات حساب کاربری</h1>
        <div className="hidden lg:block h-[2px] w-[5.5rem] rounded-xl bg-my-purple mt-2"></div>
      </div>
      <div className="hidden xl:block">
        <div className="h-96 grid place-content-center">
          <div className="flex">
            <InfoCard
              title="نام و نام خانوادگی"
              value={full_name}
              myClass="border-l-0"
              InfoForm={
                Forms("name", handleSubmit, register, handleSubmitForm) || <></>
              }
            />
            <InfoCard
              title="شماره موبایل"
              value={phone_number}
              myClass=""
              InfoForm={
                Forms(
                  "phone_number",
                  handleSubmit,
                  register,
                  handleSubmitForm
                ) || <></>
              }
            />
          </div>
          <div className="flex">
            <InfoCard
              title="ایمیل"
              value={email}
              myClass="border-l-0 border-t-0"
              InfoForm={
                Forms("email", handleSubmit, register, handleSubmitForm) || (
                  <></>
                )
              }
            />
            <InfoCard
              title="رمز عبور"
              value={password}
              myClass="border-t-0"
              InfoForm={
                Forms("password", handleSubmit, register, handleSubmitForm) || (
                  <></>
                )
              }
            />
          </div>
        </div>
      </div>

      <div className="xl:hidden h-screen mt-3 bg-white dark:bg-dark-user pt-7">
        <div className="flex flex-col">
          <InfoCard
            title="نام و نام خانوادگی"
            value={full_name}
            myClass="border-x-0 w-full"
            InfoForm={
              Forms("name", handleSubmit, register, handleSubmitForm) || <></>
            }
          />
          <InfoCard
            title="شماره موبایل"
            value={phone_number}
            myClass="border-x-0 border-t-0 w-full"
            InfoForm={
              Forms(
                "phone_number",
                handleSubmit,
                register,
                handleSubmitForm
              ) || <></>
            }
          />
          <InfoCard
            title="ایمیل"
            value={phone_number}
            myClass="border-x-0 border-t-0 w-full"
            InfoForm={
              Forms("email", handleSubmit, register, handleSubmitForm) || <></>
            }
          />
          <InfoCard
            title="رمز عبور"
            value={phone_number}
            myClass="border-x-0 border-t-0 w-full"
            InfoForm={
              Forms("password", handleSubmit, register, handleSubmitForm) || (
                <></>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
