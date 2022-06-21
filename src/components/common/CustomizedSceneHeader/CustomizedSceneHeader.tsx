import React from "react";
import { Header } from "semantic-ui-react";
import { color, font } from "^@styles/global";

export interface CustomizedSceneHeaderProps {
  title: string;
}

export const CustomizedSceneHeader = ({
  title,
}: CustomizedSceneHeaderProps) => {
  return (
    <Header
      as="h1"
      textAlign="center"
      content={title}
      style={{
        color: color.black,
        fontFamily: font.poppins,
        fontWeight: "bolder",
        fontSize: "3em",
        marginTop: "1em",
        marginBottom: "1em",
      }}
    />
  );
};
