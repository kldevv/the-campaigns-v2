import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Icon, Popup, Segment } from "semantic-ui-react";
import { LockingIndicator } from "^@components/common/LockingIndicator/LockingIndicator";
import { color, font } from "^@styles/global";

export interface InfoCardBackgroundProps {
  id: number;
  locked: boolean;
}

export const InfoCardBackground = ({ id, locked }: InfoCardBackgroundProps) => {
  return (
    <Segment
      vertical
      textAlign="center"
      style={{
        minHeight: "300px",
        backgroundColor: id % 2 ? color["dark-purple"] : color["dark-grey"],
      }}
    >
      <Icon
        name="paper plane"
        size="massive"
        style={{
          paddingTop: "0.5em",
          color: "white",
        }}
      />
      <LockingIndicator locked={locked} />
    </Segment>
  );
};
