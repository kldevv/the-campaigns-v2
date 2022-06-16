import Web3 from "web3";
import { getWalletStatus, getNetworkChainID } from "./wallet";
import { managerContractAddr } from "../../config";
import compiledManager from "../build/CampaignManager.build.json";
import compiledCampaign from "../build/Campaign.build.json";

const managerAbi = compiledManager["abi"];
const campaignAbi = compiledCampaign["abi"];


const issueRequest = async (addr, recipient, amount, description) => {
    try {
        const walletStatus = await getWalletStatus();
        if (walletStatus !== "connected") {
            throw Error("User is not connected.");
        }        
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const contract = await new web3.eth.Contract(campaignAbi, addr);
        const owner = await contract.methods.owner().call();

        if (accounts[0] !== owner) {
            throw Error("You are not the owner.");
        }

        console.log(`Issuing request with the acccount: ${accounts[0]}...`);
        console.log(`On Campaign: ${addr}`);
        console.log(`Recipient: ${recipient}\nAmount: ${amount}\nDescription: ${description}`);
        await contract.methods.issueRequest(recipient, amount, description).send({
            from: accounts[0],
            gas: "1000000"
        });
        console.log("Issue Request succeed.");
        return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}

const voteRequest = async (addr, requestID, type) => {
    try {
        const walletStatus = await getWalletStatus();
        if (walletStatus !== "connected") {
            throw Error("User is not connected.");
        }
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const contract = await new web3.eth.Contract(campaignAbi, addr);
        console.log(`Voting Request (${type}) with account: ${accounts[0]} .`);
        console.log(`On Campaign: ${addr}`);
        if (type === "approve") {
            await contract.methods.approveRequest(requestID).send({
                from: accounts[0]
            });
        } else if (type === "reject") {
            await contract.methods.rejectRequest(requestID).send({
                from: accounts[0]
            });
        } else if (type === "resolve") {
            await contract.methods.resolveRequest(requestID).send({
                from: accounts[0]
            });  
        } else if (type === "cancel") {
            await contract.methods.cancelRequest(requestID).send({
                from: accounts[0]
            }); 
        }
        console.log(`Vote Request (${type}) succeed.`);
        return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}

const createCampaign = async (name, minContribution, description) => {
    try {
        const walletStatus = await getWalletStatus();
        if (walletStatus !== "connected") {
            throw Error("User is not connected.");
        }
        const web3 = new Web3(window.ethereum);
        const networkID = await getNetworkChainID();
        const managerAddr = managerContractAddr[networkID];
        const manager = new web3.eth.Contract(managerAbi, managerAddr);
    
        const accounts = await web3.eth.getAccounts();
        
        console.log(`Creating campaign with the account: ${accounts[0]}...`);
        console.log(`On Campaign Manager: ${managerAddr}`);
        console.log(`Name: ${name}\nMinimum Contribution: ${minContribution}\nDescription: ${description}`);
        await manager.methods.deploy(name.toString(), minContribution.toString(), description.toString()).send({
            from: accounts[0],
            gas: "5000000"
        });
        console.log("Create campaign succeed.");
        return true;   
    } catch (err) {
        console.log(err);
    }
    return false;
}

const contributeCampaign = async (addr, amount) => {
    try {
        const walletStatus = await getWalletStatus();
        if (walletStatus !== "connected") {
            throw Error("User is not connected.");
        }
        const web3 = new Web3(window.ethereum);
        
        const contract = await new web3.eth.Contract(campaignAbi, addr);
        const minContribution = await contract.methods.minContribution().call();
        if (amount < minContribution) {
            throw Error("The amount is less than minimum requirement.");
        }

        const accounts = await web3.eth.getAccounts();
        console.log(`Contributing with the account: ${accounts[0]}`);
        console.log(`On Campaign: ${addr}`);
        console.log(`Amount: ${amount}`);

        await contract.methods.contribute().send({
            from: accounts[0],
            value: amount,
            gas: 1000000
        });
        console.log("Contribution succeed.");
        return true;
    } catch (err) {
        console.log(err);
    }
}

const lockCampaign = async (addr) => {
    try {
        const walletStatus = await getWalletStatus();
        if (walletStatus !== "connected") {
            throw Error("User is not connected.");
        }
        const web3 = new Web3(window.ethereum);
        
        const contract = await new web3.eth.Contract(campaignAbi, addr);

        const accounts = await web3.eth.getAccounts();
        const owner = await contract.methods.owner().call();
        if (accounts[0] !== owner) {
            throw Error("You are not the owner.");
        }
        console.log(`Locking campaign with the account: ${accounts[0]}`);
        console.log(`On Campaign: ${addr}`);
        await contract.methods.lockCampaign().send({
            from: accounts[0]
        });
        console.log("Lock Campaign succeed.");
        return true;
    } catch (err) {
        console.log(err);
    }
}

const unlockCampaign = async (addr) => {
    try {
        const walletStatus = await getWalletStatus();
        if (walletStatus !== "connected") {
            throw Error("User is not connected.");
        }
        const web3 = new Web3(window.ethereum);
        
        const contract = await new web3.eth.Contract(campaignAbi, addr);

        const accounts = await web3.eth.getAccounts();
        const owner = await contract.methods.owner().call();
        if (accounts[0] !== owner) {
            throw Error("You are not the owner.");
        }
        console.log(`Unlocking campaign with the account: ${accounts[0]}`);
        console.log(`On Campaign: ${addr}`);
        await contract.methods.unlockCampaign().send({
            from: accounts[0]
        });
        console.log("Unlock Campaign succeed.");
        return true;
    } catch (err) {
        console.log(err);
    }
}

export { issueRequest, createCampaign, voteRequest, contributeCampaign, lockCampaign, unlockCampaign };