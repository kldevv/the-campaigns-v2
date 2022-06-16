import { WindowInstalled } from "../WindowInstalled";

export const connectWallet = async () => {
  try {
    await (window as WindowInstalled).ethereum.request({
      method: "eth_requestAccounts",
    });
  } catch (err) {
    console.log(err);
  }
};
