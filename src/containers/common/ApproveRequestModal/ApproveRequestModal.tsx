import React, { useContext } from "react";
import { CustomizedRequestModal, RequestAction } from "^@components/common";
import { CampaignInfoDetailContext } from "^@contexts";
import { RequestStatus } from "^@hooks/RequestStatus";

export interface ApproveRequestModalProps {
  requestID;
}

export const ApproveRequestModal = ({
  requestID,
}: ApproveRequestModalProps) => {
  const { campaignInfo, requestInfoes } = useContext(CampaignInfoDetailContext);
  if (!campaignInfo || !requestInfoes) {
    return null;
  }
  return (
    <CustomizedRequestModal
      requestID={requestID}
      campaignName={campaignInfo.name}
      action={RequestAction.Approve}
      triggerDisabled={
        !campaignInfo.isPatron ||
        requestInfoes[requestID].userApproved ||
        requestInfoes[requestID].userRejected ||
        requestInfoes[requestID].status !== RequestStatus[RequestStatus.Active]
      }
      onConfirm={async () => {
        console.log("confirm");
      }}
    />
  );
};
