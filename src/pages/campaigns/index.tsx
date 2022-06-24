import React, { useContext } from "react";
import { BasicScreenContainer } from "^@components/screen";
import { CampaignInfoesProvider } from "^@containers/pages";
import { NetworkIDContext } from "^@contexts/NetworkIDContext";
import { CampaignScreen1 } from "^@screens/campaigns";

const Campaign = () => {
  const networkID = useContext(NetworkIDContext);
  return (
    <CampaignInfoesProvider networkID={networkID}>
      <BasicScreenContainer>
        <CampaignScreen1 />
      </BasicScreenContainer>
    </CampaignInfoesProvider>
  );
};

export default Campaign;
