import React from "react";
import { CampaignInfoDetailContext, WalletStatusContext } from "^@contexts";
import { useCampaignInfoDetail } from "^@hooks/blockchain/useCampaignInfoDetail";
import { WalletStatus } from "^@hooks/WalletStatus";

export interface CampaignInfoDetailProviderProps {
  children: React.ReactNode;
  address: string;
  walletStatus: WalletStatus;
}

export const CampaignInfoDetailProvider = ({
  children,
  walletStatus,
  address,
}: CampaignInfoDetailProviderProps) => {
  return (
    <CampaignInfoDetailContext.Provider
      value={useCampaignInfoDetail({ address, walletStatus })}
    >
      {children}
    </CampaignInfoDetailContext.Provider>
  );
};
