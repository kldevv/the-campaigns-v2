import Web3 from "web3";
import { WindowInstalled } from "../WindowInstalled";
import { abi } from "^@CampaignManager";
import * as CampaignManagerAdrresses from "../CampaignManagerAdrresses.json";
import { ChainID } from "^@hooks/ChainID";

export interface CreateCampaignValueArgs {
  /**
   * Name of the new campaign
   */
  name: string;
  /**
   * Minimum contribution to enter the campaign
   */
  minContribution: string;
  /**
   * Additional description
   */
  description: string;
}

export const createCampaign = async (
  chainID: ChainID,
  values: CreateCampaignValueArgs
) => {
  if (chainID === ChainID.Unknown) {
    return;
  }
  const { name, minContribution, description } = values;
  console.log(name);
  try {
    const web3 = new Web3((window as WindowInstalled).ethereum);
    const accounts = await web3.eth.getAccounts();

    // const networkID = await getNetworkChainID();
    // const managerAddr = managerContractAddr[networkID];

    const manager = new web3.eth.Contract(
      abi as any,
      CampaignManagerAdrresses[chainID]
    );

    console.log("Deploying new campaign (contract)...");
    console.log(
      `Detail: \nChainID: ${chainID} \nValues: ${JSON.stringify({
        name,
        minContribution,
        description,
      })}`
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
    console.log("Done.");
  } catch (err) {
    console.log("Failed.");
    console.log(err);
  }
};
