import { useRouter } from "next/router";
import React, { ReactNode, useCallback } from "react";
import { Card, Icon, Popup, Segment } from "semantic-ui-react";
import { CampaignInfo } from "^@hooks/CampaignInfo";
import { routes } from "^@routes/routes";
import { InfoCardBackground } from "./InfoCardBackground/InfoCardBackground";
import { InfoCardDetail } from "./InfoCardDetail/InfoCardDetail";

export interface CampaignInfoCardProps {
  id: number;
  campaignInfo: CampaignInfo;
}

export const CampaignInfoCard = ({
  campaignInfo,
  id,
}: CampaignInfoCardProps) => {
  const router = useRouter();
  const clickHandler = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    router.push({
      pathname: routes.common.campaign,
      query: {
        address: campaignInfo.address,
      },
    });
  }, []);

  return (
    <Card onClick={clickHandler}>
      <InfoCardBackground id={id} locked={campaignInfo.isLocked} />
      <InfoCardDetail campaignInfo={campaignInfo} />
    </Card>
  );
};
