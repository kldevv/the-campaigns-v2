import React from "react";
import { Container, Header, Icon, IconGroup } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface SuccessInfoProps {
  title: string;
  message?: string;
}

export const SuccessInfo = ({
  title = "Untitled",
  message = "No Message",
}: SuccessInfoProps) => {
  return (
    <Container textAlign="center" style={{ marginTop: "5em" }}>
      <Icon size="huge" name="check" style={{ color: color["dark-purple"] }} />
      <Header
        as="h2"
        style={{
          fontFamily: font.poppins,
          color: color["dark-purple"],
          fontWeight: "bolder",
          fontSize: "2em",
        }}
        content={title}
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
