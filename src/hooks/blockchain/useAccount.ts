import { useEffect, useState } from "react";
import Web3 from "web3";
import { WalletStatus } from "^@hooks/WalletStatus";
import { WindowInstalled } from "^@services/WindowInstalled";

export const useAccount = (): string => {
  const [account, setAccount] = useState("");
  const getAccount = async () => {
    if ((window as any).ethereum) {
      try {
        const web3 = new Web3((window as WindowInstalled).ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  return account;
};
