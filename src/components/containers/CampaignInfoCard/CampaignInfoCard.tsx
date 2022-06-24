import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { Card } from "semantic-ui-react";
import { CampaignInfo } from "^@hooks/CampaignInfo";
import { routes } from "^@routes/routes";
import { InfoCardBackground } from "./InfoCardBackground/InfoCardBackground";
import { InfoCardDetail } from "./InfoCardDetail/InfoCardDetail";

export interface CampaignInfoCardProps {
  id: number;
  account: string;
  campaignInfo: CampaignInfo;
}

export const CampaignInfoCard = ({
  campaignInfo,
  account,
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
      <InfoCardBackground
        id={id}
        locked={campaignInfo?.isLocked}
        isPatron={campaignInfo?.isPatron}
        isOwner={campaignInfo?.owner === account}
      />
      <InfoCardDetail campaignInfo={campaignInfo} />
    </Card>
  );
};
