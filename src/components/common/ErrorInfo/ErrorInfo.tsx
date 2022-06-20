import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface ErrorInfoProps {
  /**
   * Additional errro message
   */
  message?: string;
}

export const ErrorInfo = ({ message }: ErrorInfoProps) => {
  const { t } = useTranslation("common");
  return (
    <Container textAlign="center" style={{ marginTop: "5em" }}>
      <Icon
        name="close"
        size="huge"
        circular
        style={{
          color: color["darker-grey"],
        }}
      />
      <Header
        as="h2"
        style={{
          fontFamily: font.poppins,
          color: color["darker-grey"],
          fontWeight: "bolder",
          fontSize: "2em",
        }}
        content={t("addons.error.general")}
      />
      <Header
        as="h6"
        style={{
          fontFamily: font.poppins,
          color: color["dark-grey"],
          fontWeight: "normal",
          fontSize: "1em",
        }}
        content={message}
      />
    </Container>
  );
};
