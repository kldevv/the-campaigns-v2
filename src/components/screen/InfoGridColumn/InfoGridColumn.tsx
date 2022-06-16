import React from "react";
import { Grid, Header, Icon, SemanticICONS } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface InfoGridColumnProps {
  title: React.ReactNode;
  icon?: SemanticICONS;
  description: React.ReactNode;
}

export const InfoGridColumn = ({
  title,
  icon,
  description,
}: InfoGridColumnProps) => {
  return (
    <Grid.Column>
      <Header
        as="h4"
        content={title}
        style={{
          color: color["darker-grey"],
          fontFamily: font.poppins,
          fontWeight: "bolder",
          fontSize: "2em",
          marginTop: "1.5em",
          marginBottom: "1em",
        }}
      />
      <Icon name={icon} size="huge" style={{ color: color["darker-grey"] }} />
      <p
        style={{
          color: color["dark-grey"],
          fontFamily: font.poppins,
          fontWeight: "bold",
          fontSize: "1.5em",
          paddingTop: "1.5em",
        }}
      >
        {description}
      </p>
    </Grid.Column>
  );
};
