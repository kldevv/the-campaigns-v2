import React from "react";
import { Header, Icon, Menu, SemanticICONS } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface CampaignStatusProps {
  /**
   * Icon name
   */
  icon: SemanticICONS;
  /**
   * Value of the status
   */
  value: number;
  /**
   * Label of the status
   */
  label: string;
}

export const CampaignStatus = ({ icon, value, label }: CampaignStatusProps) => {
  return (
    <Menu.Item link>
      <Header>
        <span
          style={{
            fontFamily: font.poppins,
          }}
        >
          <Icon name={icon} />
          {value}
        </span>
        <br />
        <div
          style={{
            fontFamily: font.poppins,
            fontSize: "0.6em",
            fontWeight: "lighter",
            color: color["dark-grey"],
          }}
        >
          {label}
        </div>
      </Header>
    </Menu.Item>
  );
};
