import React from "react";
import { Icon } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common";

export const LockUnlockButton = () => {
  return (
    <CustomizedButton
      content={
        <span>
          <Icon name="lock" />
          Hello
        </span>
      }
      size="medium"
      loading={false}
    />
  );
};
