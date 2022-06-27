import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { CustomizedExplorer } from "^@components/common";
import { RequestCard } from "^@components/containers";
import { CampaignInfoDetailContext } from "^@contexts";
import { RequestStatus } from "^@hooks/RequestStatus";
import { color, font } from "^@styles/global";

export const RequestsExplorerMenuItem = {
  All: Object.values(RequestStatus),
  Active: [RequestStatus.Active],
  Resolved: [RequestStatus.Resolved],
  Approved: [RequestStatus.Approved],
  Cancelled: [RequestStatus.Cancelled],
  Rejected: [RequestStatus.Rejected],
};

export const RequestsExplorer = () => {
  const { requestInfoes } = useContext(CampaignInfoDetailContext);

  const panes = Object.keys(RequestsExplorerMenuItem).map((label) => {
    return {
      menuItem: (
        <Menu.Item
          key={label}
          style={{
            fontFamily: font.poppins,
            color: color["darker-grey"],
          }}
        >
          {label}
        </Menu.Item>
      ),
      render: () => {
        return (
          requestInfoes && (
            <div>
              {requestInfoes
                .filter(({ status }) =>
                  RequestsExplorerMenuItem[label].includes(
                    RequestStatus[status]
                  )
                )
                .map((requestInfo, index) => (
                  <RequestCard key={index} requestInfo={requestInfo} />
                ))
                .reverse()}
            </div>
          )
        );
      },
    };
  });
  return <CustomizedExplorer panes={panes}></CustomizedExplorer>;
};
