import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { CustomizedButton } from "^@components/common/CustomizedButton/CustomizedButton";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";
import { connectWallet } from "^@services/blockchain/connectWallet";
import { font } from "^@styles/global";

export const WalletButton = () => {
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
      setLoading(false);
      window.location.reload();
    }
  };

  const onClickHandler = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onConnectWallet();
  }, []);

  if (walletStatus !== WalletStatus.InstalledNotConnected) {
    return null;
  }

  return (
    <CustomizedButton
      loading={loading}
      content={t("containers.walletButton.connect")}
      onClick={onClickHandler}
      styles={{
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: font.poppins,
      }}
    />
  );
};
