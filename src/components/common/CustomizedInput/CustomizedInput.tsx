import React from "react";

export interface CustomizedInputProps {
  /**
   * Current value for input
   */
  value: string;
  /**
   * Action to take when input changes
   */
  setValue: (label: string, value: string) => void;
  /**
   * Unique label the input belongs to
   */
  label: string;
  /**
   * Input type
   */
  type: "text" | "number";
}

export const CustomizedInput = ({
  value,
  setValue,
  label,
  type,
}: CustomizedInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(label, event.target.value);
  };

  return <input onChange={handleChange} value={value} type={type} />;
};
