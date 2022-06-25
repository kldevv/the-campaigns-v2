import Head from "next/head";
import React from "react";
import { Header, Menu } from "semantic-ui-react";
import { CustomizedExplorer } from "^@components/common/CustomizedExplorer/CustomizedExplorer";
import { color, font } from "^@styles/global";

export const RequestsExplorer = () => {
  const panes = [
    {
      menuItem: (
        <Menu.Item
          key={1}
          style={{
            fontFamily: font.poppins,
            color: color["darker-grey"],
          }}
        >
          <Header textAlign="right">123</Header>
        </Menu.Item>
      ),
      render: () => "Tab 1 Content",
    },
    { menuItem: "Tab 2", render: () => "Tab 2 Content" },
    { menuItem: "Tab 3", render: () => "Tab 3 Content" },
  ];
  return <CustomizedExplorer panes={panes}></CustomizedExplorer>;
};
