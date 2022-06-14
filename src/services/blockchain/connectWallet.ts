export const connectWallet = async () => {
  try {
    await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });
  } catch (err) {
    console.log(err);
  }
};
