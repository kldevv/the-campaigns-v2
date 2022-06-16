import React, { useState } from "react";
import { CreateCampaignFormMetaList } from "^@screens/create-campaign";

export interface CustomizedInputProps {
  /**
   * Action to take when input changes
   */
  setParentValue: (meta: CreateCampaignFormMetaList, value: string) => void;
  /**
   * Input type
   */
  type: "text" | "number";
  /**
   * Id to set the parent values
   */
  meta: CreateCampaignFormMetaList;
}

export const CustomizedInput = ({
  setParentValue,
  type,
  meta,
}: CustomizedInputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setParentValue(meta, value);
    setValue(value);
  };

  return <input onChange={handleChange} value={value} type={type} />;
};
