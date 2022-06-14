import React from "react";
import { WalletStatusContext } from "^@contexts/WalletStatusContext";
import { useWalletStatus } from "^@hooks/blockchain/useWalletStatus";

export const WalletInfoProvider = ({ children }) => {
  return (
    <>
      <WalletStatusContext.Provider value={useWalletStatus()}>
        {children}
      </WalletStatusContext.Provider>
    </>
  );
};
