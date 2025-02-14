import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TEform = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resolver?: any;
  defaultValues?: Record<string, any>;
};
const EFrom = ({ children, onSubmit, resolver, defaultValues }: TEform) => {
  console.log(defaultValues)
  const methods = useForm({defaultValues});
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((e) => onSubmit(e))}>{children}</form>
    </FormProvider>
  );
};

export default EFrom;
