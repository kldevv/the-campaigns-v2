import React from "react";
import { AccountContext } from "^@contexts";
import { useAccount } from "^@hooks/blockchain/useAccount";

export const AccountProvider = ({ children }) => {
  return (
    <AccountContext.Provider value={useAccount()}>
      {children}
    </AccountContext.Provider>
  );
};
