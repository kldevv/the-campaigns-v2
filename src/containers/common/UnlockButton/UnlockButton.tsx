import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { Icon } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { unlockCampaign } from "^@services/blockchain/unlockCampaign";
import { color } from "^@styles/global";

export const UnlockButton = () => {
  const account = useContext(AccountContext);
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);

  const onUnlock = async () => {
    setLoading(true);
    try {
      await unlockCampaign(campaignInfo?.address);
      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onClickUnlock = useCallback(() => {
    onUnlock();
  }, [campaignInfo]);

  if (!account || !campaignInfo) {
    return null;
  }

  return (
    <CustomizedButton
      content={
        <span>
          <Icon name="unlock" />
          {t("containers.unlockButton")}
        </span>
      }
      size="medium"
      disabled={
        account !== campaignInfo.owner ||
        campaignInfo.activeRequestCount > 0 ||
        !campaignInfo.isLocked
      }
      loading={loading}
      onClick={onClickUnlock}
      style={{
        color: color["dark-grey"],
        backgroundColor: color.white,
        borderColor: color["dark-grey"],
        borderStyle: "solid",
      }}
    />
  );
};
