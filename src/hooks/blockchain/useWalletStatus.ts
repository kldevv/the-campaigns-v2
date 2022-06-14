import { WalletStatus } from "^@hooks/WalletStatus";
import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWalletStatus = (): WalletStatus => {
  const [accounts, setAccounts] = useState([] as string[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAccount() {
      if ((window as any).ethereum) {
        const web3 = new Web3((window as any).ethereum);
        try {
          setAccounts(await web3.eth.getAccounts());
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    getAccount();
  }, []);

  /**
   * Return wallet status until return from web3
   */
  if (loading) {
    return WalletStatus.Unknown;
  }

  if (accounts && accounts.length > 0) {
    return WalletStatus.InstalledAndConnected;
  } else if (accounts) {
    return WalletStatus.InstalledNotConnected;
  } else {
    return WalletStatus.NotInstalled;
  }
};
