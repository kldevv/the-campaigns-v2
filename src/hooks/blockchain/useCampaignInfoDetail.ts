import { useEffect, useState } from "react";
import Web3 from "web3";
import { WindowInstalled } from "^@services/WindowInstalled";
import { abi } from "^@Campaign";
import { EventInfo } from "^@hooks/EventInfo";
import { CampaignInfoDetail } from "^@hooks/CampaignInfoDetail";
import { RequestInfo } from "^@hooks/RequestInfo";
import { CampaignInfo } from "^@hooks/CampaignInfo";
import { WalletStatus } from "^@hooks/WalletStatus";

export interface useCampaignInfoDetailArgs {
  address: string;
  walletStatus: WalletStatus;
}

export const useCampaignInfoDetail = ({
  address,
  walletStatus,
}: useCampaignInfoDetailArgs): CampaignInfoDetail => {
  const [campaignInfoDetail, setCampaignInfoDetail] = useState(
    {} as CampaignInfoDetail
  );

  const getCampaignInfoDetail = async () => {
    if (
      (window as any).ethereum &&
      address &&
      walletStatus === WalletStatus.InstalledAndConnected
    ) {
      const web3 = new Web3((window as WindowInstalled).ethereum);
      try {
        const accounts = await web3.eth.getAccounts();
        const campaign = await new web3.eth.Contract(abi as any, address);

        const getCampaignInfo = async () => {
          /**
           * Campaign Info
           */
          try {
            const campaign = await new web3.eth.Contract(abi as any, address);

            const isPatron = await campaign.methods
              .isPatron(accounts[0])
              .call();

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
              isPatron,
            } as CampaignInfo;
            return campaignInfo;
          } catch (err) {
            console.log(err);
          }
        };
        const campaignInfo = await getCampaignInfo();

        const getCampaignRequestInfoes = async () => {
          /**
           * Requests
           */
          const requestInfoes: RequestInfo[] = [];
          for (let id = 0; id < campaignInfo.requestCount; ++id) {
            try {
              const request = await campaign.methods.requests(id).call();

              const userApproved = await campaign.methods
                .isUserApproved(id, accounts[0])
                .call();
              const userRejected = await campaign.methods
                .isUserRejected(id, accounts[0])
                .call();

              const requestInfo = {
                ...request,
                requestID: id,
                userApproved,
                userRejected,
              } as RequestInfo;
              requestInfoes.push(requestInfo);
            } catch (err) {
              console.log(err);
            }
            return requestInfoes;
          }
        };
        const requestInfoes = await getCampaignRequestInfoes();
        /**
         * Events
         */
        const events = await campaign.getPastEvents("allEvents", {
          fromBlock: "0",
          toBlock: "latest",
        });
        const eventInfoes = events.map(
          ({ blockNumber, event, returnValues }) => {
            return {
              blockNumber,
              event,
              returnValues,
            } as EventInfo;
          }
        );

        setCampaignInfoDetail({ requestInfoes, eventInfoes, campaignInfo });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (walletStatus === WalletStatus.InstalledAndConnected) {
      getCampaignInfoDetail();
    }
  }, [address, walletStatus]);

  return campaignInfoDetail;
};
