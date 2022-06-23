import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { CampaignProfileImage } from "^@containers/screens";
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
      <Container text textAlign="center">
        <CampaignProfileImage />
      </Container>
    </Segment>
  );
};
