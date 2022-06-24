import useTranslation from "next-translate/useTranslation";
import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { color } from "^@styles/global";

export const LockUnlockButton = () => {
  const account = useContext(AccountContext);
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const { t } = useTranslation("common");
  if (!account || !campaignInfo) {
    return null;
  }
  const { isLocked } = campaignInfo;
  return (
    <CustomizedButton
      content={
        <span>
          <Icon name={isLocked ? "unlock" : "lock"} />
          {isLocked
            ? t("containers.lockUnlockButton.unlock")
            : t("containers.lockUnlockButton.lock")}
        </span>
      }
      size="medium"
      disabled={account !== campaignInfo.owner}
      loading={false}
      style={{
        color: color["dark-grey"],
        backgroundColor: color.white,
        borderColor: color["dark-grey"],
        borderStyle: "solid",
      }}
    />
  );
};
