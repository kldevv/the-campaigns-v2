import { useEffect, useState } from "react";
import Web3 from "web3";
import { abi as ManagerAbi } from "^@CampaignManager";
import { abi as CampaignAbi } from "^@Campaign";
import { NetworkID } from "^@hooks/NetworkID";
import { CampaignManagerAddresses } from "^@services/CampaignManagerAdrresses";
import { WindowInstalled } from "^@services/WindowInstalled";
import { CampaignInfo } from "^@hooks/CampaignInfo";

export const useCampaignInfoes = (networkID: NetworkID) => {
  const [CampaignInfoes, setCampaignInfoes] = useState([]);

  const getCampaignInfoes = async () => {
    if (networkID === NetworkID.Unknown) {
      return;
    }
    if ((window as any).ethereum) {
      const web3 = new Web3((window as WindowInstalled).ethereum);
      const getCampaignInfo = async (campaignAddress: string) => {
        const campaign = await new web3.eth.Contract(
          CampaignAbi as any,
          campaignAddress
        );
        const campaignVarSummary = await campaign.methods
          .getVarSummary()
          .call();
        const campaignInfo = {
          address: campaignVarSummary["0"],
          owner: campaignVarSummary["1"],
          name: campaignVarSummary["2"],
          description: campaignVarSummary["3"],
          minContribution: campaignVarSummary["4"],
          isLocked: campaignVarSummary["5"],
          activeBalance: campaignVarSummary["6"],
          totalBalance: campaignVarSummary["7"],
          patronCount: campaignVarSummary["8"],
          activeRequestCount: campaignVarSummary["9"],
          requestCount: campaignVarSummary["10"],
        } as CampaignInfo;
        return campaignInfo;
      };

      try {
        const address = CampaignManagerAddresses[networkID];
        const manager = new web3.eth.Contract(ManagerAbi as any, address);

        const campaignAddresses = await manager.methods.getCampaigns().call();
        const campaignInfoes = await Promise.all(
          campaignAddresses.map(getCampaignInfo)
        );
        setCampaignInfoes(campaignInfoes);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getCampaignInfoes();
  }, [networkID]);
  return CampaignInfoes;
};
