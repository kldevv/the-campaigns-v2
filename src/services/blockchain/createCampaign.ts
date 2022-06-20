import Web3 from "web3";
import { WindowInstalled } from "../WindowInstalled";
import { abi } from "^@CampaignManager";
import { CampaignManagerAddresses } from "../CampaignManagerAdrresses";
import { NetworkID } from "^@hooks/NetworkID";

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
  networkID: NetworkID,
  { name, minContribution, description }: CreateCampaignValueArgs
) => {
  if (networkID === NetworkID.Unknown) {
    return;
  }

  try {
    const web3 = new Web3((window as WindowInstalled).ethereum);
    const accounts = await web3.eth.getAccounts();
    const address = CampaignManagerAddresses[NetworkID.Rinkeby];

    const manager = new web3.eth.Contract(abi as any, address);

    console.log("Creating a new campaign...");
    console.log(
      `Detail: 
* Network: ${NetworkID[networkID]} 
* Address: ${address}
* Values:
  ** Name: ${name}
  ** Minimum Contribution: ${minContribution}
  ** Description: ${description}
      `
    );

    const result = await manager.methods
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

    return result;
  } catch (err) {
    console.log("Failed.");
    throw err;
  }
};
