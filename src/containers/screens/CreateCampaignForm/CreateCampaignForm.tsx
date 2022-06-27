import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { NetworkIDContext } from "^@contexts/NetworkIDContext";
import { Form } from "semantic-ui-react";
import {
  CustomizedFormField,
  CustomizedInput,
  ErrorInfo,
  SuccessInfo,
  WalletNotConnectedInfo,
} from "^@components/common";
import { CreateCampaignButton } from "^@containers/common";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";
import { CreateCampaignFormMetaList } from "^@screens/create-campaign";
import { color, font } from "^@styles/global";
import { createCampaign } from "^@services/blockchain/createCampaign";

export type CreateCampaignFormFieldStruct = {
  meta: CreateCampaignFormMetaList;
  label: string;
  description: string;
  required?: boolean;
  type: "text" | "number";
};

export interface CreateCampaignFormProps {
  /**
   * Form field
   */
  fields: CreateCampaignFormFieldStruct[];
}

export const CreateCampaignForm = ({ fields }: CreateCampaignFormProps) => {
  const { t } = useTranslation("common");
  const walletStatus = useContext(WalletStatusContext);
  const networkID = useContext(NetworkIDContext);

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

  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const createCampaignSubmit = async () => {
    setloading(true);
    try {
      const name = values[CreateCampaignFormMetaList.Name] ?? "Unnamed";
      const minContribution =
        values[CreateCampaignFormMetaList.MinContribution] ?? 0;
      const description = values[CreateCampaignFormMetaList.Description] ?? "";

      await createCampaign(networkID, {
        name,
        minContribution,
        description,
      });
      setValues({});
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
    setloading(false);
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      createCampaignSubmit();
    },
    [values]
  );

  return (
    <>
      {error ? (
        <ErrorInfo message={error} />
      ) : success ? (
        <SuccessInfo
          title={t("containers.createCampaignForm.success.title")}
          message={t("containers.createCampaignForm.success.message")}
        />
      ) : (
        <Form
          onSubmit={handleSubmit}
          loading={loading}
          warning={walletStatus !== WalletStatus.InstalledAndConnected}
        >
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
          <CreateCampaignButton loading={loading} />
          <WalletNotConnectedInfo />
        </Form>
      )}
    </>
  );
};
