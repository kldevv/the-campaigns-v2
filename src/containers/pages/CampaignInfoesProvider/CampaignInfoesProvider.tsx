import React from "react";
import { CampaignInfoesContext } from "^@contexts/CampaignInfoesContext";
import { useCampaignInfoes } from "^@hooks/blockchain/useCampaignInfoes";
import { NetworkID } from "^@hooks/NetworkID";

export interface CampaignInfoesProviderProps {
  children: React.ReactNode;
  networkID: NetworkID;
}
export const CampaignInfoesProvider = ({
  children,
  networkID,
}: CampaignInfoesProviderProps) => {
  return (
    <CampaignInfoesContext.Provider value={useCampaignInfoes(networkID)}>
      {children}
    </CampaignInfoesContext.Provider>
  );
};
