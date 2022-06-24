import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useContext } from "react";
import { Header, Icon } from "semantic-ui-react";
import { CampaignInfoDetailContext, NetworkIDContext } from "^@contexts";
import { NetworkID } from "^@hooks/NetworkID";
import { routes } from "^@routes/routes";
import { color, font } from "^@styles/global";

export const CampaignProfileDetail = () => {
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const networkID = useContext(NetworkIDContext);
  const { t } = useTranslation("common");
  if (!campaignInfo) {
    return null;
  }
  const { name, address, owner } = campaignInfo || {};
  const getEtherscanURL = (address: string): string => {
    return routes.external.etherscan
      .replace("v1", NetworkID[networkID])
      .replace("v2", address);
  };
  return (
    <Header>
      <div
        style={{
          fontSize: "2em",
          fontWeight: "bolder",
          color: color.black,
          fontFamily: font.poppins,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "0.6em",
          fontWeight: "lighter",
          marginTop: "2em",
          fontFamily: font.poppins,
          color: color["dark-grey"],
        }}
      >
        {address && (
          <>
            {t("containers.campaignProfileDetail.at")}
            <Icon name="file alternate outline" />
            <a
              target="_blank"
              href={getEtherscanURL(address)}
              rel="noopener noreferrer"
            >
              {address}
            </a>
            <br />
          </>
        )}
        {owner && (
          <>
            {t("containers.campaignProfileDetail.createdBy")}
            <Icon name="user outline" />
            <a
              target="_blank"
              href={getEtherscanURL(owner)}
              rel="noopener noreferrer"
            >
              {owner}
            </a>
          </>
        )}
      </div>
    </Header>
  );
};
