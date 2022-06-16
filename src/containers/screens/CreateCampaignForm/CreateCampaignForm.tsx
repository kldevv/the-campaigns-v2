import React, { useCallback, useState } from "react";
import { Form, Header } from "semantic-ui-react";
import { CustomizedFormField, CustomizedInput } from "^@components/common";
import { color, font } from "^@styles/global";

export type CreateCampaignFormFieldStruct = {
  label: string;
  description: string;
  required?: boolean;
  type: "text" | "number";
};

export interface CreateCampaignFormProps {
  /**
   * Form title
   */
  title: string;
  /**
   * Form field
   */
  fields: CreateCampaignFormFieldStruct[];
}

export const CreateCampaignForm = ({
  title,
  fields,
}: CreateCampaignFormProps) => {
  const [values, setValues] = useState({});
  const handleFieldChange = useCallback((label: string, value: string) => {
    setValues({ ...values, [label]: value });
  }, []);

  const formFields = fields.map(({ label, description, required, type }) => {
    return (
      <CustomizedFormField
        key={label}
        label={label}
        description={description}
        required={required}
        input={
          <CustomizedInput
            setValue={handleFieldChange}
            value={values[label]}
            label={label}
            type={type}
          />
        }
      />
    );

    // const onSubmit = useCallBack(()=> {

    // }, [])
  });

  return (
    <>
      <Header
        as="h1"
        content={title}
        style={{
          color: color.black,
          fontFamily: font.poppins,
          fontWeight: "bolder",
          fontSize: "3em",
          marginTop: "2em",
          marginBottom: "1em",
        }}
      />
      <Form>{formFields}</Form>
    </>
  );
};
