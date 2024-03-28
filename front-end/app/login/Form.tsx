import { FormInputs } from "./FormInputs";
import { Button } from "@/components/ui/button";

import {
  checkUser,
  createUser,
  verifyUser,
  getNewOTP,
  customerLogin,
} from "@/actions";

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
  otp: string;
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
    setTimeLeft(60);
  }, [phoneNumber]);

  useEffect(() => {
    console.log("starts");
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setIsDisabled(false);
      setTimeLeft(60);
    }
  }, [setIsDisabled]);

  const handleOTPRequest = async (phone_number: string) => {
    setIsDisabled(true);
    const res = await getNewOTP(phone_number);
  };

  const input = FormInputs(formState, control);

  const OTPRequestButton = (
    <div className="flex items-center mt-5 justify-between pl-5">
      <button
        className="text-blue-400 font-semibold disabled:opacity-50"
        disabled={isDisabled}
        onClick={() => handleOTPRequest(phoneNumber)}
      >
        دریافت مجدد کد
      </button>
      {isDisabled && (
        <p className="text-gray-800 dark:text-gray-200">
          {timeLeft.toLocaleString("fa")} مانده تا دریافت مجدد کد
        </p>
      )}
    </div>
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (formState === INITIAL) {
      const userStatus = await checkUser(data.phone_number);
      setPhoneNumber(data.phone_number);
      console.log(userStatus);

      if (!userStatus.exists) {
        await createUser(data.phone_number);
        setFormState(SIGN_UP);
        setIsDisabled(true);
      } else {
        if (!userStatus.is_verified) {
          setFormState(SIGN_UP);
          handleOTPRequest(data.phone_number);
        } else {
          if (userStatus.password_set) {
            setFormState(SIGN_IN_WITH_PASSWORD);
          } else {
            setFormState(SIGN_IN_WITH_OTP);
            handleOTPRequest(data.phone_number);
          }
        }
      }
    } else if (formState === SIGN_IN_WITH_PASSWORD) {
      const tokens = await customerLogin(
        data.phone_number,
        data.password,
        data.otp
      );
      console.log(tokens);
    } else {
      const tokens = await customerLogin(
        data.phone_number,
        data.password,
        data.otp
      );
      console.log(tokens);
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
            {OTPRequestButton}
          </div>
        )}
        {formState === SIGN_IN_WITH_OTP && (
          <div>
            <p>{`کد تایید برای شماره ${phoneNumber} پیامک شد`}</p>
            {OTPRequestButton}
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
