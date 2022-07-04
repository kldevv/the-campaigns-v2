import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { CampaignInfo } from "^@hooks/CampaignInfo";

export interface InfoCardDetailProps {
  campaignInfo: CampaignInfo;
}

export const InfoCardDetail = ({ campaignInfo }: InfoCardDetailProps) => {
  const { t } = useTranslation("common");
  if (!campaignInfo) {
    return null;
  }
  const { name, address, description, patronCount } = campaignInfo;
  return (
    <>
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {"At "}
          {address.slice(0, 6) + "..."}
        </Card.Meta>
        <Card.Description>
          {description.slice(0, 200) + (description.length > 200 ? "..." : "")}
        </Card.Description>
      </Card.Content>
      <Card.Content textAlign="center" extra>
        <Icon name="users" />
        {t("containers.campaignBulletin.patrons", { count: patronCount })}
      </Card.Content>
    </>
  );
};
