import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const EImage = ({
  name,
  label,
  required,
  edit,
}: {
  name: string;
  label: string;
  required: boolean;
  edit: string;
}) => {
  const [imageUrl, setImageUrl] = useState<string | any>("");
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <label htmlFor={name} className={`block text-sm font-medium ${edit}`}>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <div>
            <label className="cursor-pointer flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg p-3 hover:bg-gray-100">
              <span className="text-sm text-gray-500 uppercase">
                {imageUrl?.name ? imageUrl?.name : "upload image"}
              </span>
              <input
                {...field}
                value={value?.fileName}
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImageUrl(file);
                    onChange(file);
                  }
                }}
              />
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default EImage;
