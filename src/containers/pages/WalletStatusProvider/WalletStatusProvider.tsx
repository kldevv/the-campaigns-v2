import React from "react";
import { WalletStatusContext } from "^@contexts";
import { useWalletStatus } from "^@hooks/blockchain/useWalletStatus";

export const WalletStatusProvider = ({ children }) => {
  return (
    <WalletStatusContext.Provider value={useWalletStatus()}>
      {children}
    </WalletStatusContext.Provider>
  );
};
