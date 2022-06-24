import React from "react";
import { Container, Icon, Segment } from "semantic-ui-react";
import { CampaignLabel } from "^@components/containers/CampaignLabel/CampaignLabel";
import { color } from "^@styles/global";

export interface InfoCardBackgroundProps {
  /**
   * Campaign ID
   */
  id: number;
  /**
   * Is campaign locked or open
   */
  locked: boolean;
  /**
   * Is the current user a patron of the campaign
   */
  isPatron: boolean;
  /**
   * Is the current user the owner of the campaign
   */
  isOwner: boolean;
}

export const InfoCardBackground = ({
  id,
  locked,
  isPatron,
  isOwner,
}: InfoCardBackgroundProps) => {
  return (
    <Segment
      vertical
      textAlign="center"
      style={{
        minHeight: "300px",
        backgroundColor: id % 2 ? color["dark-purple"] : color["dark-grey"],
      }}
    >
      <Icon.Group>
        <Icon
          name="paper plane"
          size="massive"
          style={{
            paddingTop: "0.5em",
            color: "white",
          }}
        />
      </Icon.Group>
      <div style={{ marginTop: "1em" }}>
        <CampaignLabel locked={locked} isPatron={isPatron} isOwner={isOwner} />
      </div>
    </Segment>
  );
};
