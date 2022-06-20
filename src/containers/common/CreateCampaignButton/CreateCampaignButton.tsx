import useTranslation from "next-translate/useTranslation";
import React, { useContext } from "react";
import { CustomizedButton } from "^@components/common";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";

export interface CreateCampaignButtonProps {
  /**
   * Button size
   */
  size?: "medium" | "huge" | "small";
  /**
   * Button loading
   */
  loading?: boolean;
}

export const CreateCampaignButton = ({
  size = "small",
  loading = false,
}: CreateCampaignButtonProps) => {
  const walletStatus = useContext(WalletStatusContext);
  const { t } = useTranslation("common");

  return (
    <>
      <CustomizedButton
        loading={loading}
        disabled={walletStatus !== WalletStatus.InstalledAndConnected}
        content={t("containers.createButton.create")}
        type="submit"
        size={size}
      />
    </>
  );
};
