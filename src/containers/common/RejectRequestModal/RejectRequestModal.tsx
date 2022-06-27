import React, { useContext } from "react";
import { CustomizedRequestModal, RequestAction } from "^@components/common";
import { CampaignInfoDetailContext } from "^@contexts";
import { RequestStatus } from "^@hooks/RequestStatus";
import { rejectRequest } from "^@services/blockchain/rejectRequest";
import { color } from "^@styles/global";

export interface RejectRequestModalProps {
  requestID;
}

export const RejectRequestModal = ({ requestID }: RejectRequestModalProps) => {
  const { campaignInfo, requestInfoes } = useContext(CampaignInfoDetailContext);
  if (!campaignInfo || !requestInfoes) {
    return null;
  }
  return (
    <CustomizedRequestModal
      requestID={requestID}
      campaignName={campaignInfo.name}
      action={RequestAction.Reject}
      triggerStyle={{
        backgroundColor: color["darker-grey"],
      }}
      triggerDisabled={
        !campaignInfo.isPatron ||
        requestInfoes[requestID].userApproved ||
        requestInfoes[requestID].userRejected ||
        requestInfoes[requestID].status !== RequestStatus[RequestStatus.Active]
      }
      onConfirm={async () => {
        await rejectRequest(campaignInfo.address, requestID);
      }}
    />
  );
};
