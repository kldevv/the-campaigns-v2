import { windowInstalled } from "./types";

export const connectWallet = async () => {
  try {
    await (window as windowInstalled).ethereum.request({
      method: "eth_requestAccounts",
    });
  } catch (err) {
    console.log(err);
  }
};
