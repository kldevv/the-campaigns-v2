import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { Button, Form, Input, Modal } from "semantic-ui-react";
import {
  CustomizedButton,
  CustomizedFormField,
  CustomizedInput,
} from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { issueRequest } from "^@services/blockchain/issueRequest";
import { color, font } from "^@styles/global";

export enum IssueRequestFormMetaList {
  Recipient,
  Amount,
  Description,
}

export const NewRequestModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({} as typeof IssueRequestFormMetaList);
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const account = useContext(AccountContext);
  const { t } = useTranslation("common");

  const onOpenHandler = useCallback(() => {
    setOpen(true);
  }, []);
  const onCloseHandler = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFieldChange = useCallback(
    (meta: IssueRequestFormMetaList, value: string) => {
      setValues({ ...values, [meta]: value });
    },
    [values]
  );

  const fields = [
    {
      label: t("containers.newRequestModal.fields.recipient.label"),
      description: t("containers.newRequestModal.fields.recipient.description"),
      required: true,
      type: "text",
      meta: IssueRequestFormMetaList.Recipient,
    },
    {
      label: t("containers.newRequestModal.fields.amount.label"),
      description: t("containers.newRequestModal.fields.amount.description"),
      required: true,
      type: "number",
      meta: IssueRequestFormMetaList.Amount,
    },
    {
      label: t("containers.newRequestModal.fields.description.label"),
      description: t(
        "containers.newRequestModal.fields.description.description"
      ),
      required: false,
      type: "text",
      meta: IssueRequestFormMetaList.Description,
    },
  ];
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
              type={type as "text" | "number"}
            />
          }
        />
      );
    }
  );

  const onIssueRequest = async () => {
    setLoading(true);
    try {
      await issueRequest(campaignInfo?.address, {
        recipient: values[IssueRequestFormMetaList.Recipient],
        amount: Math.max(0, parseInt(values[IssueRequestFormMetaList.Amount])),
        description: values[IssueRequestFormMetaList.Description],
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  const onConfirm = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onIssueRequest();
    },
    [campaignInfo, values]
  );

  if (!campaignInfo) {
    return null;
  }

  return (
    <Modal
      onOpen={onOpenHandler}
      onClose={onCloseHandler}
      trigger={
        <Button
          icon="ticket"
          content={t("containers.newRequestModal.button")}
          disabled={!campaignInfo.isLocked || account !== campaignInfo.owner}
          style={{
            fontFamily: font.poppins,
            backgroundColor: color["light-purple"],
            color: color["dark-purple"],
          }}
        />
      }
      open={open}
    >
      <Modal.Header style={{ fontFamily: font.poppins, fontSize: "2em" }}>
        {t("containers.newRequestModal.header", {
          name: campaignInfo.name,
        })}
      </Modal.Header>
      <Modal.Content style={{ fontFamily: font.poppins }}>
        <Form loading={false}>
          <Form.Field required>
            <label
              style={{
                fontSize: "13px",
                color: color["dark-grey"],
                fontWeight: "normal",
                fontFamily: font.poppins,
              }}
            >
              {t("containers.newRequestModal.required")}
            </label>
            {formFields}
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <CustomizedButton
          content={t("containers.newRequestModal.cancel")}
          size="medium"
          loading={false}
          onClick={onCloseHandler}
          style={{
            color: color["darker-grey"],
            backgroundColor: color["light-purple"],
          }}
        />
        <CustomizedButton
          content={t("containers.newRequestModal.confirm")}
          size="medium"
          type="submit"
          loading={loading}
          onClick={onConfirm}
        />
      </Modal.Actions>
    </Modal>
  );
};
