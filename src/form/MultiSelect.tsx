import displayFeature from "@/utils/displayFeature";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

type TOption = {
  label: string;
  value: string;
};

const MultiSelect = ({ category }: { category: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="features"
      control={control}
      render={({ field }) => {
        // Convert default values to react-select format
        const defaultValue = Array.isArray(field.value)
          ? field.value.map((item: any) => ({
              label: item.name || item.label || item.value,
              value: item.value || item.name || item.label,
            }))
          : [];

        return (
          <Select
            {...field}
            value={defaultValue}
            isMulti
            options={displayFeature(category)}
            className="basic-multi-select z-20"
            classNamePrefix="select"
            onChange={(selected) => {
              // Convert back to expected form format
              const convertedValues = selected.map((item) => ({
                name: item.value,
              }));
              field.onChange(convertedValues);
            }}
          />
        );
      }}
    />
  );
};

export default MultiSelect;
