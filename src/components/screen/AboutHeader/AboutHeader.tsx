import React from "react";
import { Header } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface AboutHeaderProps {
  content: React.ReactNode;
}

export const AboutHeader = ({ content }: AboutHeaderProps) => (
  <Header
    as="h3"
    style={{
      fonFamily: font.poppins,
      fontWeight: "bolder",
      fontSize: "2em",
      marginTop: "1em",
      marginButton: "1em",
      color: color["dark-purple"],
    }}
  >
    {content}
  </Header>
);
