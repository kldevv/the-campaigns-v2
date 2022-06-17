import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { Form, Header, Message } from "semantic-ui-react";
import { CustomizedFormField, CustomizedInput } from "^@components/common";
import { CreateCampaignButton } from "^@containers/common";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";
import { CreateCampaignFormMetaList } from "^@screens/create-campaign";
import { color, font } from "^@styles/global";

export type CreateCampaignFormFieldStruct = {
  meta: CreateCampaignFormMetaList;
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
  const { t } = useTranslation("common");
  const walletStatus = useContext(WalletStatusContext);
  const [values, setValues] = useState({});
  const handleFieldChange = useCallback(
    (meta: CreateCampaignFormMetaList, value: string) => {
      setValues({ ...values, [meta]: value });
    },
    [values]
  );

  const formFields = fields.map(
    ({ label, description, required, type, meta }) => {
      return (
        <CustomizedFormField
          key={label}
          label={label}
          description={description}
          required={required}
          input={
            <CustomizedInput
              setParentValue={handleFieldChange}
              meta={meta}
              type={type}
            />
          }
        />
      );
    }
  );

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
      <Form>
        <Form.Field required>
          <label
            style={{
              fontSize: "13px",
              color: color["dark-grey"],
              fontWeight: "normal",
              fontFamily: font.poppins,
            }}
          >
            {t("containers.createCampaignForm.require")}
          </label>
        </Form.Field>
        {formFields}
        <CreateCampaignButton payload={values} />
        {walletStatus !== WalletStatus.InstalledAndConnected && (
          <Message info content={t("addons.walletNotConnected")} />
        )}
      </Form>
    </>
  );
};
