import useTranslation from "next-translate/useTranslation";
import React, { useContext, useState } from "react";
import { CustomizedButton } from "^@components/CustomizedButton/CustomizedButton";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";
import { connectWallet } from "^@services/blockchain/connectWallet";
import { font } from "^@styles/global";

export const WalletButton = () => {
  const walletStatus = useContext(WalletStatusContext);
  if (walletStatus !== WalletStatus.InstalledNotConnected) {
    return null;
  }

  const onConnectWallet = async () => {
    setLoading(true);
    try {
      await connectWallet();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");

  return (
    <CustomizedButton
      loading={loading}
      content={t("walletButton.connect")}
      onClick={onConnectWallet}
      styles={{
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: font.poppins,
      }}
    />
  );
};
