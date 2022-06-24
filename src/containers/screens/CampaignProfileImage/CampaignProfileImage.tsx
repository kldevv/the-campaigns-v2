import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { LockingIndicator } from "^@components/common/LockingIndicator/LockingIndicator";
import { CampaignInfoDetailContext } from "^@contexts";
import { color } from "^@styles/global";

export const CampaignProfileImage = () => {
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  return (
    <Icon.Group>
      <Icon
        name="paper plane"
        circular
        size="massive"
        style={{
          color: color["dark-purple"],
          backgroundColor: "white",
          marginTop: "-1em",
        }}
      />
      {campaignInfo && (
        <LockingIndicator
          style={{
            marginLeft: "8em",
            marginTop: "5em",
          }}
          locked={campaignInfo?.isLocked}
        />
      )}
    </Icon.Group>
  );
};
