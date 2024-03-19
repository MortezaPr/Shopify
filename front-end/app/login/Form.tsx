import { FormInputs } from "./FormInputs";
import { Button } from "@/components/ui/button";

import checkUser from "@/actions/checkUser";
import createUser from "@/actions/createUser";
import verifyUser from "@/actions/verifyUser";
import checkPassword from "@/actions/checkPassword";

import { useForm, SubmitHandler } from "react-hook-form";

import { useState, Dispatch, SetStateAction } from "react";
import { FormState } from "./formStates";

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

  const input = FormInputs(formState, control);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (formState === "initial") {
      const userStatus = await checkUser(data.phone_number);
      setPhoneNumber(data.phone_number);
      console.log(userStatus);

      if (!userStatus.exists) {
        await createUser(data.phone_number);
        setFormState("signUp");
      } else {
        if (!userStatus.is_verified) {
          setFormState("signUp");
        } else {
          if (userStatus.password_set) {
            setFormState("signInWithPassword");
          } else {
            setFormState("signInWithOTP");
          }
        }
      }
    } else if (formState === "signInWithPassword") {
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
        {formState === "initial" && (
          <div>
            <p>سلام!</p>
            <p>لطفا شماره موبایل خود را وارد کنید</p>
          </div>
        )}
        {formState === "signUp" && (
          <div>
            <p>حساب کاربری وجود ندارد.</p>
            <p> برای ساخت حساب جدید، کد تایید ارسال گردید.</p>
          </div>
        )}
        {formState === "signInWithOTP" && (
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
