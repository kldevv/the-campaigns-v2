import React, { useContext } from "react";
import { BasicScreenContainer } from "^@components/screen";
import { CampaignInfoesProvider } from "^@containers/pages";
import { NetworkIDContext } from "^@contexts/NetworkIDContext";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { WalletStatus } from "^@hooks/WalletStatus";
import { CampaignScene1 } from "^@screens/campaigns";

const Campaign = () => {
  const walletStatus = useContext(WalletStatusContext);
  const networkID = useContext(NetworkIDContext);
  return (
    <CampaignInfoesProvider networkID={networkID}>
      <BasicScreenContainer>
        <CampaignScene1 />
      </BasicScreenContainer>
    </CampaignInfoesProvider>
  );
};

export default Campaign;
