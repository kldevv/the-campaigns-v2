import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Message } from "semantic-ui-react";
import { font } from "^@styles/global";

export const WalletNotConnectedInfo = () => {
  const { t } = useTranslation("common");
  return (
    <Message
      icon="suitcase"
      warning
      header={t("addons.walletNotConnected.title")}
      list={[t("addons.walletNotConnected.message")]}
      style={{
        fontFamily: font.poppins,
      }}
    />
  );
};
