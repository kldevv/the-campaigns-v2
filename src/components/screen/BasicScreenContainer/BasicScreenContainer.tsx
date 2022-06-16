import React from "react";
import { Segment } from "semantic-ui-react";

export interface BasicScreenContainerProps {
  children?: React.ReactNode;
}

export const BasicScreenContainer = ({
  children,
}: BasicScreenContainerProps) => {
  return (
    <Segment vertical style={{ minHeight: "800px" }}>
      {children}
    </Segment>
  );
};
