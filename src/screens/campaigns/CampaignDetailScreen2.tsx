import React from "react";
import { Header, Label, Menu, Tab } from "semantic-ui-react";

export const CampaignDetailScreen2 = () => {
  const panes = [
    {
      menuItem: (
        <Menu.Item key="messages" style={{}}>
          Messages<Label>15</Label>
        </Menu.Item>
      ),
      render: () => <Header>Hello</Header>,
    },
    {
      menuItem: "Tab 3",
      render: () => <Header>Hello2</Header>,
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
