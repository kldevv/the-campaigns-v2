import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Segment } from "semantic-ui-react";
import {
  CreateCampaignForm,
  CreateCampaignFormFieldStruct,
} from "^@containers/screens";

export const CreateCampaignScene1 = () => {
  const { t } = useTranslation("common");
  const fieldData: CreateCampaignFormFieldStruct[] = [
    {
      label: t("containers.createCampaignForm.fields.name.label"),
      description: t("containers.createCampaignForm.fields.name.description"),
      required: true,
      type: "text",
    },
    {
      label: t("containers.createCampaignForm.fields.minContribution.label"),
      description: t(
        "containers.createCampaignForm.fields.minContribution.description"
      ),
      required: true,
      type: "number",
    },
    {
      label: t("containers.createCampaignForm.fields.description.label"),
      description: t(
        "containers.createCampaignForm.fields.description.description"
      ),
      required: true,
      type: "text",
    },
  ];
  return (
    <Segment vertical style={{ minHeight: "800px" }}>
      <Container text textAlign="left">
        <CreateCampaignForm
          title={t("containers.createCampaignForm.title")}
          fields={fieldData}
        />
      </Container>
    </Segment>
  );
};
