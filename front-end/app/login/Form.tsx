import { FormInputs } from "./FormInputs";
import { Button } from "@/components/ui/button";

import checkUser from "@/actions/checkUser";
import createUser from "@/actions/createUser";
import verifyUser from "@/actions/verifyUser";
import checkPassword from "@/actions/checkPassword";
import getNewOTP from "@/actions/getNewOTP";

import { useForm, SubmitHandler } from "react-hook-form";

import { useState, Dispatch, SetStateAction, useEffect } from "react";
import {
  FormState,
  INITIAL,
  SIGN_UP,
  SIGN_IN_WITH_PASSWORD,
  SIGN_IN_WITH_OTP,
} from "./formStates";

type FormData = {
  phone_number: string;
  password: string;
  otp_code: string;
};

interface FormProps {
  formState: FormState;
  setFormState: Dispatch<SetStateAction<FormState>>;
}

const Form: React.FC<FormProps> = ({ formState, setFormState }) => {
  const { control, handleSubmit } = useForm<FormData>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (isDisabled) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setTimeLeft(60);
    }
  }, [isDisabled]);

  const input = FormInputs(formState, control);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (formState === INITIAL) {
      const userStatus = await checkUser(data.phone_number);
      setPhoneNumber(data.phone_number);
      console.log(userStatus);

      if (!userStatus.exists) {
        await createUser(data.phone_number);
        setIsDisabled(true);
        setFormState(SIGN_UP);
      } else {
        if (!userStatus.is_verified) {
          setFormState(SIGN_UP);
        } else {
          if (userStatus.password_set) {
            setFormState(SIGN_IN_WITH_PASSWORD);
          } else {
            const res = await getNewOTP(data.phone_number);
            console.log(res.otp);
            setIsDisabled(true);
            setFormState(SIGN_IN_WITH_OTP);
          }
        }
      }
    } else if (formState === SIGN_IN_WITH_PASSWORD) {
      // check password
      const result = await checkPassword(data.phone_number, data.password);
      console.log(result);
    } else {
      await verifyUser(data.phone_number, data.otp_code);
    }
  };

  return (
    <div>
      <div className="py-5 flex flex-col justify-start gap-2 text-sm text-slate-500">
        {formState === INITIAL && (
          <div>
            <p>سلام!</p>
            <p>لطفا شماره موبایل خود را وارد کنید</p>
          </div>
        )}
        {formState === SIGN_UP && (
          <div>
            <p>حساب کاربری وجود ندارد.</p>
            <p> برای ساخت حساب جدید، کد تایید ارسال گردید.</p>
            <button
              className="text-blue-400 font-semibold mt-5 disabled:opacity-50"
              disabled={isDisabled}
            >
              دریافت مجدد کد
            </button>
            {isDisabled && <p>Time left: {timeLeft}s</p>}
          </div>
        )}
        {formState === SIGN_IN_WITH_OTP && (
          <div>
            <p>{`کد تایید برای شماره ${phoneNumber} پیامک شد`}</p>
          </div>
        )}
      </div>
      <form
        className="flex flex-col gap-8 pt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {input}
        <div>
          <Button className="text-base font-bold w-96">ورود</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
