import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { CampaignInfoCard } from "^@components/containers";
import { CampaignInfoesContext } from "^@contexts/CampaignInfoesContext";

export const CampaingInfoBulletin = () => {
  const campaignInfoes = useContext(CampaignInfoesContext);
  const campaignInfoCards = campaignInfoes.map((campaignInfo, index) => {
    return (
      <CampaignInfoCard key={index} id={index} campaignInfo={campaignInfo} />
    );
  });
  return <Card.Group centered>{campaignInfoCards}</Card.Group>;
};
