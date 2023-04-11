import { ChangeEvent, FormEvent, useState } from "react";

interface FormValues {
  [key: string]: string;
}

export default function useForm(formValues: FormValues, submit: Function) {
  const [formData, setFormData] = useState<any>(formValues);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submit();
    setFormData(formValues);
  }

  return { formData, setFormData, handleInputChange, handleSubmit };
}
