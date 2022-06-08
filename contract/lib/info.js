import Web3 from "web3";
import { getProvider } from "./provider";
import compiledManager from "../build/CampaignManager.build.json";
import compiledCampaign from "../build/Campaign.build.json";
import { managerContractAddr } from "../../config";
import { getWalletStatus, getNetworkChainID } from "./wallet";

const managerAbi = compiledManager["abi"];
const campaignAbi = compiledCampaign["abi"];

const getAllCampaignInfo = async () => {
    try {
        const provider = await getProvider();
        const web3 = new Web3(provider);
        const networkID = await getNetworkChainID();
        const managerAddr = managerContractAddr[networkID];
        const campaignManager = await new web3.eth.Contract(managerAbi, managerAddr);
    
        const campaigns = await campaignManager.methods.getCampaigns().call();
    
        const result = await Promise.all(campaigns.map(async (addr) => {
            const contract = await new web3.eth.Contract(campaignAbi, addr);
            const summary = await contract.methods.getVarSummary().call();
            const info = {
                address: summary["0"],
                owner: summary["1"],
                name: summary["2"],
                description: summary["3"],
                minContribution: summary["4"],
                isLocked: summary["5"],
                activeBalance: summary["6"],
                totalBalance: summary["7"],
                patronCount: summary["8"],
                activeRequestCount: summary["9"],
                requestCount: summary["10"]
            }
            return info;
        }));
        return result;
    } catch (err) {
        console.log(err);
    }
    return [];
}

const getCampaignInfoDetail = async (addr) => {
    try {
        const walletStatus = await getWalletStatus();
        const provider = await getProvider();
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();

        const contract = await new web3.eth.Contract(campaignAbi, addr);
        const summary = await contract.methods.getVarSummary().call();

        let isPatron = undefined;
        if (walletStatus === "connected") {
            isPatron = await contract.methods.isPatron(accounts[0]).call();
        }

        const campaignInfo = {
            address: summary["0"],
            owner: summary["1"],
            name: summary["2"],
            description: summary["3"],
            minContribution: summary["4"],
            isLocked: summary["5"],
            activeBalance: summary["6"],
            totalBalance: summary["7"],
            patronCount: summary["8"],
            activeRequestCount: summary["9"],
            requestCount: summary["10"],
            isPatron
        }
        const requests = [];
        for (let i = 0; i < campaignInfo["requestCount"]; ++i) {
            const request = await contract.methods.requests(i).call();

            let isUserApproved = undefined;
            let isUserRejected = undefined;
            if (walletStatus === "connected") {
                isUserApproved = await contract.methods.isUserApproved(i, accounts[0]).call();
                isUserRejected = await contract.methods.isUserRejected(i, accounts[0]).call();
            }

            const requestFormatted = {
                requestID: i,
                amount: request.amount,
                approvalCount: request.approvalCount,
                recipient: request.recipient,
                rejectionCount: request.rejectionCount,
                requestDescription: request.requestDescription,
                status: request.status,
                targetApprovalCount: request.targetApprovalCount,
                isUserApproved,
                isUserRejected
            }
            requests.push(requestFormatted);
        }

        const eventsRaw = await contract.getPastEvents("allEvents", {
            fromBlock: "0",
            toBlock: "latest"
        });
        const events = eventsRaw.map(({blockNumber, event, returnValues}) => {
            return {
                blockNumber, 
                event,
                returnValues
            };
        })

        return [ campaignInfo, requests, events ];
    } catch (err) {
        console.log(err);
    }
}


export { getCampaignInfoDetail, getAllCampaignInfo }


