import React, { useCallback } from "react";
import { Button } from "semantic-ui-react";
import { color } from "^@styles/global";

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
  content: string;
  /**
   * Handler for the click events
   */
  onClick: () => void;
  /**
   * Additional styles
   */
  styles?: {};
}

export const CustomizedButton = ({
  loading = true,
  disabled = false,
  content,
  onClick,
  styles,
}: CustomizedButtonProps) => {
  const onClickHandler = useCallback(() => {
    onClick();
  }, []);
  return (
    <Button
      loading={loading}
      disabled={disabled}
      type="button"
      primary
      onClick={onClickHandler}
      style={{
        color: color.white,
        backgroundColor: color["dark-purple"],
        ...styles,
      }}
    >
      {content}
    </Button>
  );
};
