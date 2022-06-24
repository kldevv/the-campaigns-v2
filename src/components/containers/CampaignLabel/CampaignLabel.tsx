import React from "react";
import CSS from "csstype";
import useTranslation from "next-translate/useTranslation";
import { Icon, Popup } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface CampaignLabelProps {
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
  /**
   * Additional styling
   */
  style?: CSS.Properties;
}

export const CampaignLabel = ({
  locked,
  isOwner,
  isPatron,
  style,
}: CampaignLabelProps) => {
  const { t } = useTranslation("common");

  return (
    <>
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
              backgroundColor: locked ? color["light-grey"] : color.white,
              ...style,
            }}
          />
        }
      />
      {isOwner && (
        <Popup
          style={{
            fontFamily: font.poppins,
          }}
          content={t("addons.campaign.owner")}
          trigger={
            <Icon
              circular
              name="chess king"
              size="small"
              style={{
                color: color["darker-grey"],
                backgroundColor: color.white,
                ...style,
              }}
            />
          }
        />
      )}
      {isPatron && (
        <Popup
          style={{
            fontFamily: font.poppins,
          }}
          content={t("addons.campaign.patron")}
          trigger={
            <Icon
              circular
              name="users"
              size="small"
              style={{
                color: color["darker-grey"],
                backgroundColor: color.white,
                ...style,
              }}
            />
          }
        />
      )}
    </>
  );
};
