import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { CustomizedSceneHeader } from "^@components/common";
import { CampaingInfoBulletin } from "^@containers/screens";

export const CampaignScreen1 = () => {
  const { t } = useTranslation("common");
  return (
    <Segment vertical style={{ minHeight: 700, padding: "5em 0em 5em 0em" }}>
      <Container fluid textAlign="center">
        <CustomizedSceneHeader title={t("screens.campaign.title")} />
        <CampaingInfoBulletin />
      </Container>
    </Segment>
  );
};
