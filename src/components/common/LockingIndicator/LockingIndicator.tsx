import React from "react";
import CSS from "csstype";
import useTranslation from "next-translate/useTranslation";
import { Dimmer, Icon, Popup, Segment } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface LockingIndicatorProps {
  /**
   * Indicate locked or open
   */
  locked: boolean;
  /**
   * Is waiting for content
   */
  loading?: boolean;
  /**
   * Additional styling
   */
  style?: CSS.Properties;
}

export const LockingIndicator = ({
  locked,
  loading = false,
  style,
}: LockingIndicatorProps) => {
  const { t } = useTranslation("common");

  return (
    <Popup
      style={{
        fontFamily: font.poppins,
      }}
      content={locked ? t("addons.campaign.locked") : t("addons.campaign.open")}
      trigger={
        !loading && (
          <Icon
            circular
            name={locked ? "lock" : "check"}
            size="small"
            style={{
              color: locked ? color.white : color["darker-grey"],
              backgroundColor: locked ? color["darker-grey"] : color.white,
              ...style,
            }}
          />
        )
      }
    />
  );
};
