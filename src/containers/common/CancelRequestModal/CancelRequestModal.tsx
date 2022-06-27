import React, { useContext } from "react";
import { CustomizedRequestModal, RequestAction } from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { RequestStatus } from "^@hooks/RequestStatus";
import { cancelRequest } from "^@services/blockchain/cancelRequest";
import { color } from "^@styles/global";

export interface CancelRequestModalProps {
  requestID;
}

export const CancelRequestModal = ({ requestID }: CancelRequestModalProps) => {
  const { campaignInfo, requestInfoes } = useContext(CampaignInfoDetailContext);
  const account = useContext(AccountContext);

  if (!campaignInfo || !requestInfoes || !account) {
    return null;
  }
  return (
    <CustomizedRequestModal
      requestID={requestID}
      campaignName={campaignInfo.name}
      action={RequestAction.Cancel}
      triggerStyle={{
        borderColor: color["dark-grey"],
        borderStyle: "solid",
        color: color["dark-grey"],
        backgroundColor: color.white,
      }}
      triggerDisabled={
        (requestInfoes[requestID].status !==
          RequestStatus[RequestStatus.Approved] &&
          requestInfoes[requestID].status !==
            RequestStatus[RequestStatus.Active]) ||
        campaignInfo.owner !== account
      }
      onConfirm={async () => {
        await cancelRequest(campaignInfo.address, requestID);
      }}
    />
  );
};
