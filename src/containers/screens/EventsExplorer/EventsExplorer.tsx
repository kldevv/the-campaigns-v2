import useTranslation from "next-translate/useTranslation";
import React, { useContext } from "react";
import { Menu, Table } from "semantic-ui-react";
import { CustomizedExplorer } from "^@components/common";
import { AccountContext, CampaignInfoDetailContext } from "^@contexts";
import { color, font } from "^@styles/global";

export const EventsRequestsExplorerMenuItem = {
  All: [],
};

export const EventsExplorer = () => {
  const { eventInfoes } = useContext(CampaignInfoDetailContext);
  const account = useContext(AccountContext);
  const { t } = useTranslation("common");
  const panes = Object.keys(EventsRequestsExplorerMenuItem).map((label) => {
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
          eventInfoes && (
            <Table>
              <Table.Header>
                <Table.Row style={{ fontFamily: font.poppins }}>
                  <Table.HeaderCell width={3}>
                    {t("containers.eventsExplorer.header.type")}
                  </Table.HeaderCell>
                  <Table.HeaderCell width={9}>
                    {t("containers.eventsExplorer.header.description")}
                  </Table.HeaderCell>
                  <Table.HeaderCell width={6}>
                    {t("containers.eventsExplorer.header.blockNumber")}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {eventInfoes
                  .map(({ blockNumber, event, returnValues }, index) => {
                    return (
                      <Table.Row
                        key={index}
                        style={{ fontFamily: font.poppins }}
                      >
                        <Table.Cell>{event}</Table.Cell>
                        <Table.Cell>
                          {t("containers.eventsExplorer.description", {
                            address: returnValues?.from ?? account,
                            requestID: returnValues?.requestID ?? "N/A",
                          })}
                        </Table.Cell>
                        <Table.Cell>{blockNumber}</Table.Cell>
                      </Table.Row>
                    );
                  })
                  .reverse()}
              </Table.Body>
            </Table>
          )
        );
      },
    };
  });

  return <CustomizedExplorer panes={panes}></CustomizedExplorer>;
};
