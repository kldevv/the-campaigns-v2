import Web3 from "web3";
import { WindowInstalled } from "^@services/WindowInstalled";
import { abi } from "^@Campaign";

export interface IssueRequestArgs {
  recipient: string;
  amount: number;
  description: string;
}

export const issueRequest = async (
  address: string,
  { recipient, amount, description }: IssueRequestArgs
) => {
  if (!address || amount <= 0) {
    return;
  }
  try {
    const web3 = new Web3((window as WindowInstalled).ethereum);
    const accounts = await web3.eth.getAccounts();

    const campaign = new web3.eth.Contract(abi as any, address);

    console.log("Issuing a new request...");
    console.log(
      `Detail: 
* Address: ${address}
* Recipient: ${recipient}
* Amount: ${amount}
* Description: ${description}
* From: ${accounts[0]}
      `
    );

    const result = await campaign.methods
      .issueRequest(recipient, amount, description)
      .send({
        from: accounts[0],
        gas: "1000000",
      });

    console.log("Done.");

    return result;
  } catch (err) {
    console.log("Failed.");
    throw err;
  }
};
