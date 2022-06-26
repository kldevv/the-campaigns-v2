import React, { useContext } from "react";
import { Container, Icon } from "semantic-ui-react";
import { CampaignLabel } from "^@components/containers/CampaignLabel/CampaignLabel";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { color } from "^@styles/global";

export const CampaignProfileImage = () => {
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const account = useContext(AccountContext);

  return (
    <>
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
      </Icon.Group>
      <div>
        {campaignInfo && (
          <CampaignLabel
            locked={campaignInfo.isLocked}
            isPatron={campaignInfo.isPatron}
            isOwner={campaignInfo.owner === account}
          />
        )}
      </div>
    </>
  );
};
