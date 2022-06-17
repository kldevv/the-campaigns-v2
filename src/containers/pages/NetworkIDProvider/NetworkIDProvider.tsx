import React from "react";
import { NetworkIDContext } from "^@contexts/NetworkIDContext";
import { useNetworkID } from "^@hooks/blockchain/useNetworkID";

export const NetworkIDProvider = ({ children }) => {
  return (
    <>
      <NetworkIDContext.Provider value={useNetworkID()}>
        {children}
      </NetworkIDContext.Provider>
    </>
  );
};
