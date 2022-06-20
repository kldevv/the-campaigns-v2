import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { CustomizedButton, WalletNotConnectedInfo } from "^@components/common";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";
import { connectWallet } from "^@services/blockchain/connectWallet";

export interface WalletButtonProps {
  size?: "medium" | "huge" | "small";
}

export const WalletButton = ({ size = "huge" }: WalletButtonProps) => {
  const walletStatus = useContext(WalletStatusContext);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");

  const onConnectWallet = async () => {
    setLoading(true);
    try {
      await connectWallet();
    } catch (err) {
      console.log(err);
    } finally {
      window.location.reload();
    }
  };

  const onClickHandler = useCallback((e: React.MouseEvent) => {
    setLoading(true);
    e.preventDefault();
    onConnectWallet();
    setLoading(false);
  }, []);

  if (walletStatus !== WalletStatus.InstalledNotConnected) {
    return null;
  }

  return (
    <>
      <CustomizedButton
        loading={loading}
        content={t("containers.walletButton.connect")}
        onClick={onClickHandler}
        size={size}
      />
    </>
  );
};
