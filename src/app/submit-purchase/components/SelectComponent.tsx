import React from "react";
import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CustomInput from "./CustomInput";

interface LocationSelectProps {
  label: string;
  name: string;
  control: any;
  options: string[];
  handleChange?: (event: any) => void;
}

const SelectComponent: React.FC<LocationSelectProps> = ({
  label,
  name,
  control,
  options,
  handleChange,
}) => {
  return (
    <div className="flex flex-col gap-3 mg:items-center">
      <label className="font-bold mr-3 mg:mr-0">{label}</label>
      <div className="w-80 xs:w-96">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              onChange={(e) => {
                if (handleChange) handleChange(e);
                field.onChange(e);
              }}
              input={<CustomInput fullWidth />}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
};

export default SelectComponent;
