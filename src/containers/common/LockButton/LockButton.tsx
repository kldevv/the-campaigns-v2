import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { Icon } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { lockCampaign } from "^@services/blockchain/lockCampaign";
import { color } from "^@styles/global";

export const LockButton = () => {
  const account = useContext(AccountContext);
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);

  const onLock = async () => {
    setLoading(true);
    try {
      await lockCampaign(campaignInfo?.address);
      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onClickLock = useCallback(() => {
    onLock();
  }, [campaignInfo]);

  if (!account || !campaignInfo) {
    return null;
  }

  return (
    <CustomizedButton
      content={
        <span>
          <Icon name="lock" />
          {t("containers.lockButton")}
        </span>
      }
      size="medium"
      disabled={
        account !== campaignInfo.owner ||
        campaignInfo.patronCount < 1 ||
        campaignInfo.isLocked
      }
      loading={loading}
      onClick={onClickLock}
      style={{
        color: color["dark-grey"],
        backgroundColor: color.white,
        borderColor: color["light-grey"],
        borderStyle: "solid",
      }}
    />
  );
};
