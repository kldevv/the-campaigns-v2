import { WalletStatus } from "^@hooks/WalletStatus";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { WindowInstalled } from "^@services/WindowInstalled";

export const useWalletStatus = (): WalletStatus => {
  const [walletStatus, setWalletStatus] = useState(WalletStatus.Unknown);
  useEffect(() => {
    async function getWalletStatus() {
      if ((window as any).ethereum) {
        const web3 = new Web3((window as WindowInstalled).ethereum);
        try {
          const accounts = await web3.eth.getAccounts();
          if (accounts && accounts.length > 0) {
            setWalletStatus(WalletStatus.InstalledAndConnected);
          } else if (accounts) {
            setWalletStatus(WalletStatus.InstalledNotConnected);
          } else {
            setWalletStatus(WalletStatus.NotInstalled);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    getWalletStatus();
  }, []);
  return walletStatus;
};
