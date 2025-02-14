import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type EInput = {
  name: string;
  type: string;
  placeholder: string;
  edit?: string;
  required?: boolean;
  label: string;
};
const EInput = ({ name, type, placeholder, edit, required, label }: EInput) => {
  const { control } = useFormContext();
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-sm font-medium mb-1 ${edit}`}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <input
              {...field}
              id={name}
              type={type}
              required={required ? required : false}
              className={` border border-blue-500 outline-none h-10 px-3 rounded-md text-gray-600`}
              placeholder={placeholder}
            />
            <p>{error?.message}</p>
          </div>
        )}
      />
    </div>
  );
};

export default EInput;
