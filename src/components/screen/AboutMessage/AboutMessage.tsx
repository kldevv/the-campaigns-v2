import React from "react";
import { color, font } from "^@styles/global";

export interface AboutMessageProps {
  content: React.ReactNode;
}

export const AboutMessage = ({ content }: AboutMessageProps) => (
  <p
    style={{
      fontFamily: font.poppins,
      color: color["dark-grey"],
      fontSize: "1.5em",
      fontWeight: "bold",
    }}
  >
    {content}
  </p>
);
