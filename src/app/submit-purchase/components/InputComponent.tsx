import React from "react";
import CustomInput from "./CustomInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputComponentProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  inputName: string;
  label: string;
  validation?: object;
}

export default function InputComponent({
  register,
  errors,
  inputName,
  label,
  validation,
}: InputComponentProps) {
  return (
    <div className="flex flex-col gap-3 mg:items-center">
      <label className="font-bold mr-3 mg:mr-0">{label}</label>
      <div className="w-80 xs:w-96">
        <CustomInput
          fullWidth
          {...register(inputName, {
            required: "این مورد الزامیست",
            ...validation,
          })}
        />
        {errors[inputName] && (
          <span className="text-xs text-red-500 pt-2">
            {String(errors[inputName].message)}
          </span>
        )}
      </div>
    </div>
  );
}
