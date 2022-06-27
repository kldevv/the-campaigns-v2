import Web3 from "web3";
import { WindowInstalled } from "^@services/WindowInstalled";
import { abi } from "^@Campaign";

export const approveRequest = async (address: string, requestID: number) => {
  if (!address) {
    return;
  }
  try {
    const web3 = new Web3((window as WindowInstalled).ethereum);
    const accounts = await web3.eth.getAccounts();

    const campaign = new web3.eth.Contract(abi as any, address);

    console.log("Approving the request...");
    console.log(
      `Detail: 
* Address: ${address}
* Request ID: ${requestID}
* From: ${accounts[0]}
      `
    );

    const result = await campaign.methods.approveRequest(requestID).send({
      from: accounts[0],
    });

    console.log("Done.");

    return result;
  } catch (err) {
    console.log("Failed.");
    throw err;
  }
};
