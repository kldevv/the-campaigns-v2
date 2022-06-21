import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Icon, Popup, Segment } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface InfoCardBackgroundProps {
  id: number;
  locked: boolean;
}

export const InfoCardBackground = ({ id, locked }: InfoCardBackgroundProps) => {
  const { t } = useTranslation("common");
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
      <Popup
        style={{
          fontFamily: font.poppins,
        }}
        content={
          locked ? t("addons.campaign.locked") : t("addons.campaign.open")
        }
        trigger={
          <Icon
            circular
            name={locked ? "lock" : "check"}
            size="small"
            style={{
              color: locked ? color.white : color["darker-grey"],
              backgroundColor: locked ? color["darker-grey"] : color.white,
            }}
          />
        }
      />
    </Segment>
  );
};
