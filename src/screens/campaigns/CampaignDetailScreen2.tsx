import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Header, Icon, Menu, SemanticICONS, Tab } from "semantic-ui-react";
import { EventsExplorer, RequestsExplorer } from "^@containers/screens";
import { color, font } from "^@styles/global";

export const CampaignDetailScreen2 = () => {
  const { t } = useTranslation("common");

  const menuItemVal: string[][] = [
    [t("screens.campaignDetail.screen2.requests"), "th list"],
    [t("screens.campaignDetail.screen2.events"), "save"],
  ];

  const menuItems = menuItemVal.map((val: string[]) => {
    return (
      <Menu.Item
        key={val[0]}
        style={{ fontFamily: font.poppins, color: color["darker-grey"] }}
      >
        <Icon name={val[1] as SemanticICONS} />
        {val[0]}
      </Menu.Item>
    );
  });

  const panes = [
    {
      menuItem: menuItems[0],
      render: () => <RequestsExplorer />,
    },
    {
      menuItem: menuItems[1],
      render: () => <EventsExplorer />,
    },
  ];
  return (
    <div style={{ minHeight: "800px" }}>
      <Tab
        panes={panes}
        menu={{
          attached: true,
          tabular: true,
          style: {
            display: "flex",
            justifyContent: "center",
          },
        }}
      />
    </div>
  );
};
