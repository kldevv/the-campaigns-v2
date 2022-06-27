import React, { useContext } from "react";
import { CustomizedRequestModal, RequestAction } from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { RequestStatus } from "^@hooks/RequestStatus";
import { resolveRequest } from "^@services/blockchain/resolveRequest";
import { color } from "^@styles/global";

export interface ResolveRequestModalProps {
  requestID;
}

export const ResolveRequestModal = ({
  requestID,
}: ResolveRequestModalProps) => {
  const { campaignInfo, requestInfoes } = useContext(CampaignInfoDetailContext);
  const account = useContext(AccountContext);

  if (!campaignInfo || !requestInfoes || !account) {
    return null;
  }
  return (
    <CustomizedRequestModal
      requestID={requestID}
      campaignName={campaignInfo.name}
      action={RequestAction.Resolve}
      triggerStyle={{
        borderColor: color["dark-purple"],
        borderStyle: "solid",
        color: color["dark-purple"],
        backgroundColor: color.white,
      }}
      triggerDisabled={
        requestInfoes[requestID].status !==
          RequestStatus[RequestStatus.Approved] ||
        campaignInfo.owner !== account
      }
      onConfirm={async () => {
        await resolveRequest(campaignInfo.address, requestID);
      }}
    />
  );
};
