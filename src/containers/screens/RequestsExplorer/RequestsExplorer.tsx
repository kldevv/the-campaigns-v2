import React, { useContext } from "react";
import { Menu, Tab } from "semantic-ui-react";
import { CustomizedExplorer } from "^@components/common/CustomizedExplorer/CustomizedExplorer";
import { RequestCard } from "^@components/containers";
import { CampaignInfoDetailContext } from "^@contexts";
import { color, font } from "^@styles/global";

export const RequestsExplorer = () => {
  const { requestInfoes } = useContext(CampaignInfoDetailContext);
  console.log(requestInfoes);

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
          123
        </Menu.Item>
      ),
      render: () => {
        return (
          requestInfoes && (
            <div>
              <RequestCard requestInfo={requestInfoes[0]} />
            </div>
          )
        );
      },
    },
  ];
  return <CustomizedExplorer panes={panes}></CustomizedExplorer>;
};
