import React from "react";
import { Button } from "semantic-ui-react";
import { color, font } from "^@styles/global";
import CSS from "csstype";

interface CustomizedButtonProps {
  /**
   * Is the button loading
   */
  loading?: boolean;
  /**
   * Is the button disabled
   */
  disabled?: boolean;
  /**
   * Content to show on the button
   */
  content: React.ReactNode;
  /**
   * Handler for the click events
   */
  onClick: (e: React.MouseEvent) => void;
  /**
   * Button Size
   */
  size?: "medium" | "huge" | "small";
  /**
   * Additional Style
   */
  style?: CSS.Properties;
}

export const CustomizedButton = ({
  loading = true,
  disabled = false,
  content,
  onClick,
  size = "huge",
  style,
}: CustomizedButtonProps) => {
  return (
    <Button
      loading={loading}
      disabled={disabled}
      type="button"
      primary
      onClick={onClick}
      size={size}
      style={{
        color: color.white,
        backgroundColor: color["dark-purple"],
        fontFamily: font.poppins,
        fontWeight: "bold",
        ...style,
      }}
    >
      {content}
    </Button>
  );
};
