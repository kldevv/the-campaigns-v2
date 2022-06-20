import React from "react";
import { Form } from "semantic-ui-react";

import { color, font } from "^@styles/global";

export interface CustomizedFormFieldProps {
  label: string;
  description?: string;
  input?: React.ReactNode;
  required?: boolean;
}

export const CustomizedFormField = ({
  label,
  description,
  input,
  required = false,
}: CustomizedFormFieldProps) => {
  return (
    <Form.Field required={required}>
      <label
        style={{
          fontSize: "20px",
          fontFamily: font.poppins,
          fontWeight: "bold",
          color: color.black,
        }}
      >
        {label}
      </label>
      <p
        style={{
          fontSize: "13px",
          fontFamily: font.poppins,
          fontWeight: "bold",
          color: color["dark-grey"],
        }}
      >
        {description}
      </p>
      {input}
    </Form.Field>
  );
};
