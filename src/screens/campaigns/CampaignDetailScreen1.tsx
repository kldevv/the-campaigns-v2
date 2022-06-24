import React from "react";
import { Container, Segment } from "semantic-ui-react";
import {
  CampaignProfileDetail,
  CampaignProfileImage,
  CampaignProfileStatus,
} from "^@containers/screens";
import { color } from "^@styles/global";

export const CampaignDetailScreen1 = () => {
  return (
    <div style={{ minHeight: "600px" }}>
      <div
        style={{
          minHeight: 200,
          maxHeight: 200,
          backgroundColor: color["light-purple"],
          zIndex: 0,
        }}
      />
      <Container text textAlign="center">
        <CampaignProfileImage />
        <CampaignProfileDetail />
        <CampaignProfileStatus />
      </Container>
    </div>
  );
};
