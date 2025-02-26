import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type EInputProps = {
  name: string;
  placeholder?: string;
  edit?: string;
  required?: boolean;
  label: string;
  options?: (string | number)[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
};

const ESelect = ({
  name,
  edit,
  required,
  label,
  options = [],
  onChange,
  multiple = false,
}: EInputProps) => {
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
        render={({ field }) => (
          <select
            multiple={multiple}
            {...field}
            id={name}
            value={field.value} 
            className="border border-blue-500 outline-none h-10 px-3 rounded-md text-gray-600 w-full"
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option 
                className="uppercase text-sm" 
                key={option} 
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default ESelect;