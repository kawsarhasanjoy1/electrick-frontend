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
const ETextAria = ({
  name,
  type,
  placeholder,
  edit,
  required,
  label,
}: EInput) => {
  const { control } = useFormContext();
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-gray-600`}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <textarea
              {...field}
              id={name}
              rows={4}
              required={required ? required : false}
              className={` border border-blue-500 outline-none h-24 w-full mt-2 px-3 rounded-md text-gray-600 py-3 px-6`}
              placeholder={placeholder}
            />
            <p>{error?.message}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ETextAria;
