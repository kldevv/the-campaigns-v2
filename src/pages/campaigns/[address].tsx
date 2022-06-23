import { useRouter } from "next/router";
import React, { useContext } from "react";
import { BasicScreenContainer } from "^@components/screen";
import { CampaignInfoDetailProvider } from "^@containers/pages/CampaignInfoDetailProvider/CampaignInfoDetailProvider";
import { WalletStatusContext } from "^@contexts";
import { CampaignDetailScene } from "^@screens/campaigns";

const CampaignDetail = () => {
  const router = useRouter();

  let { address } = router.query;
  if (Array.isArray(address)) {
    address = address[0];
  }

  const walletStatus = useContext(WalletStatusContext);

  return (
    <CampaignInfoDetailProvider address={address} walletStatus={walletStatus}>
      <BasicScreenContainer>
        <CampaignDetailScene />
      </BasicScreenContainer>
    </CampaignInfoDetailProvider>
  );
};

export default CampaignDetail;
