import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";
import { CampaignInfoDetailContext } from "^@contexts";
import { color } from "^@styles/global";

export const CampaignDetailScene = () => {
  return (
    <Segment vertical style={{ minHeight: "800px" }}>
      <Segment
        vertical
        style={{
          minHeight: 200,
          maxHeight: 200,
          backgroundColor: color["light-purple"],
          zIndex: 0,
        }}
      />
    </Segment>
  );
};
