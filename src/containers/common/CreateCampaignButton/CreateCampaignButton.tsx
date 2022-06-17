import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { CustomizedButton } from "^@components/common";
import { NetworkIDContext } from "^@contexts/NetworkIDContext";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { NetworkID } from "^@hooks/NetworkID";
import { WalletStatus } from "^@hooks/WalletStatus";
import { CreateCampaignFormMetaList } from "^@screens/create-campaign";
import { createCampaign } from "^@services/blockchain/createCampaign";

export interface CreateCampaignButtonProps {
  /**
   * Button size
   */
  size?: "medium" | "huge" | "small";
  /**
   * Args to create campaign
   */
  payload;
}

export const CreateCampaignButton = ({
  size = "small",
  payload,
}: CreateCampaignButtonProps) => {
  const walletStatus = useContext(WalletStatusContext);
  const networkID = useContext(NetworkIDContext);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");

  const clickToCreate = async () => {
    setLoading(true);
    try {
      await createCampaign(networkID, {
        name: payload[CreateCampaignFormMetaList.Name] ?? "Unnamed",
        minContribution:
          payload[CreateCampaignFormMetaList.MinContribution] ?? 0,
        description: payload[CreateCampaignFormMetaList.Description] ?? "",
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    // window.location.reload();
  };

  const onClickHandler = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      clickToCreate();
    },
    [payload, networkID]
  );

  return (
    <CustomizedButton
      loading={loading}
      disabled={walletStatus !== WalletStatus.InstalledAndConnected}
      content={t("containers.createButton.create")}
      onClick={onClickHandler}
      size={size}
    />
  );
};
