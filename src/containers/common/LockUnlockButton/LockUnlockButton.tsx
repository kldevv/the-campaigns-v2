import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common";
import { AccountContext } from "^@contexts";

export const LockUnlockButton = () => {
  const account = useContext(AccountContext);
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
