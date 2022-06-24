import useTranslation from "next-translate/useTranslation";
import React, { useContext } from "react";
import { Button, Menu, SemanticWIDTHS } from "semantic-ui-react";
import { CampaignStatus, CampaignStatusProps } from "^@components/containers";
import { ContributeModal, LockButton, UnlockButton } from "^@containers/common";
import { CampaignInfoDetailContext } from "^@contexts";
import { color } from "^@styles/global";

export const CampaignProfileStatus = () => {
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const { t } = useTranslation("common");
  const campaignStatusValues: CampaignStatusProps[] = [
    {
      icon: "users",
      value: campaignInfo?.patronCount,
      label: t("containers.campaignProfileStatus.patrons"),
    },
    {
      icon: "ethereum",
      value: campaignInfo?.totalBalance,
      label: t("containers.campaignProfileStatus.totalBalance"),
    },
    {
      icon: "ethereum",
      value: campaignInfo?.activeBalance,
      label: t("containers.campaignProfileStatus.activeBalance"),
    },
    {
      icon: "users",
      value: campaignInfo?.minContribution,
      label: t("containers.campaignProfileStatus.minContribution"),
    },
  ];
  const campaingStatuses = campaignStatusValues.map(
    ({ icon, value, label }, index) => {
      return (
        <CampaignStatus icon={icon} value={value} label={label} key={index} />
      );
    }
  );
  return (
    <>
      <Menu
        compact
        widths={Math.min(16, campaingStatuses.length) as SemanticWIDTHS}
        style={{ maxWidth: "40em", color: color.white }}
      >
        {campaingStatuses}
      </Menu>
      <div style={{ margin: "2em" }}>
        <Button.Group>
          <ContributeModal />
          {campaignInfo &&
            (campaignInfo.isLocked ? <UnlockButton /> : <LockButton />)}
        </Button.Group>
      </div>
    </>
  );
};
