import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { CustomizedSceneHeader } from "^@components/common";
import {
  CreateCampaignForm,
  CreateCampaignFormFieldStruct,
} from "^@containers/screens";

export enum CreateCampaignFormMetaList {
  Name,
  MinContribution,
  Description,
}

export const CreateCampaignScene1 = () => {
  const { t } = useTranslation("common");
  const fieldData: CreateCampaignFormFieldStruct[] = [
    {
      meta: CreateCampaignFormMetaList.Name,
      label: t("containers.createCampaignForm.fields.name.label"),
      description: t("containers.createCampaignForm.fields.name.description"),
      required: true,
      type: "text",
    },
    {
      meta: CreateCampaignFormMetaList.MinContribution,
      label: t("containers.createCampaignForm.fields.minContribution.label"),
      description: t(
        "containers.createCampaignForm.fields.minContribution.description"
      ),
      required: true,
      type: "number",
    },
    {
      meta: CreateCampaignFormMetaList.Description,
      label: t("containers.createCampaignForm.fields.description.label"),
      description: t(
        "containers.createCampaignForm.fields.description.description"
      ),
      type: "text",
    },
  ];
  return (
    <Segment
      vertical
      style={{ minHeight: "800px", padding: "5em 0em 5em 0em" }}
    >
      <Container text textAlign="left">
        <CustomizedSceneHeader title={t("screens.createCampaign.title")} />
        <CreateCampaignForm fields={fieldData} />
      </Container>
    </Segment>
  );
};
