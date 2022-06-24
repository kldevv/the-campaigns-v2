import Web3 from "web3";
import { WindowInstalled } from "^@services/WindowInstalled";
import { abi } from "^@Campaign";

export const contributeCampaign = async (address: string, amount: number) => {
  if (!address || amount <= 0) {
    return;
  }
  try {
    const web3 = new Web3((window as WindowInstalled).ethereum);
    const accounts = await web3.eth.getAccounts();

    const campaign = new web3.eth.Contract(abi as any, address);

    console.log("Contributing to the campaign...");
    console.log(
      `Detail: 
* Address: ${address}
* Amount: ${amount}
* From: ${accounts[0]}
      `
    );

    const result = await campaign.methods.contribute().send({
      from: accounts[0],
      value: amount,
      gas: 1000000,
    });

    console.log("Done.");

    return result;
  } catch (err) {
    console.log("Failed.");
    throw err;
  }
};
