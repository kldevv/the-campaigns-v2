import Web3 from "web3";
import { getWalletStatus } from "./wallet";
import { providerEndpoint } from "../../config";

const getProvider = async () => {
    const walletStatus = await getWalletStatus();
    let provider;
    if (walletStatus === "connected") {
        provider = window.ethereum;
    } else {
        provider = new Web3.providers.HttpProvider(providerEndpoint);
    }
    return provider;
}

export { getProvider };