import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { WalletButton } from "^@containers/common";
import { color, font } from "^@styles/global";

export const IndexScreen1 = () => {
  const { t } = useTranslation("common");
  return (
    <Segment
      vertical
      style={{
        minHeight: 700,
        padding: "5em 0em 5em 0em",
      }}
    >
      <Container text textAlign="center">
        <Header
          as="h1"
          content={t("screens.index.screen1.title")}
          style={{
            color: color.black,
            fontFamily: font.poppins,
            fontWeight: "bolder",
            fontSize: "3.5em",
            marginTop: "2em",
          }}
        />
        <Header
          as="h2"
          content={
            <>
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: color["light-purple"],
                  textDecorationThickness: "5px",
                  color: color["dark-purple"],
                }}
              >
                {t("logo.name")}
              </span>
              {t("screens.index.screen1.subtitle")}
              <span
                style={{
                  color: color["darker-grey"],
                }}
              >
                {t("screens.index.screen1.emphasis")}
              </span>
            </>
          }
          style={{
            fontFamily: font.poppins,
            fontSize: "1.7em",
            color: color["dark-grey"],
            fontWeight: "bold",
            marginTop: "1.5em",
            marginBottom: "1.5em",
          }}
        />
        <WalletButton />
      </Container>
    </Segment>
  );
};
