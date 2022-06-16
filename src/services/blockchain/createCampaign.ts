import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { windowInstalled } from "./types";
import { abi as managerAbi } from "^@CampaignManager";

export const createCampaign = async (name, minContribution, description) => {
  try {
    const web3 = new Web3((window as windowInstalled).ethereum);
    const networkID = await getNetworkChainID();
    const managerAddr = managerContractAddr[networkID];
    const manager = new web3.eth.Contract(managerAbi, managerAddr);

    const accounts = await web3.eth.getAccounts();

    console.log(`Creating campaign with the account: ${accounts[0]}...`);
    console.log(`On Campaign Manager: ${managerAddr}`);
    console.log(
      `Name: ${name}\nMinimum Contribution: ${minContribution}\nDescription: ${description}`
    );
    await manager.methods
      .deploy(
        name.toString(),
        minContribution.toString(),
        description.toString()
      )
      .send({
        from: accounts[0],
        gas: "5000000",
      });
    console.log("Create campaign succeed.");
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
};
