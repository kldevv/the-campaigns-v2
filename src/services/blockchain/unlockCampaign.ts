import Web3 from "web3";
import { WindowInstalled } from "^@services/WindowInstalled";
import { abi } from "^@Campaign";

export const unlockCampaign = async (address: string) => {
  if (!address) {
    return;
  }
  try {
    const web3 = new Web3((window as WindowInstalled).ethereum);
    const accounts = await web3.eth.getAccounts();

    const campaign = new web3.eth.Contract(abi as any, address);

    console.log("Unlocking the campaign...");
    console.log(
      `Detail: 
* Address: ${address}
      `
    );

    const result = await campaign.methods.unlockCampaign().send({
      from: accounts[0],
    });

    console.log("Done.");

    return result;
  } catch (err) {
    console.log("Failed.");
    throw err;
  }
};
