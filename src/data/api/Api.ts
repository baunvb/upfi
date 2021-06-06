import Web3 from 'web3'
import { COINGECKO_API, tokenCgkIdMap } from '../../utils/Constants';
declare const window: any;

//connect wallet api
export const connectMetaMaskWallet = async (ethereum: any) => {
    // const account = await getWalletAddress();
    // if(account.length == 0) {
        return await ethereum.request({ method: 'eth_requestAccounts' });
    // }
}

export const disconnectMetaMaskWallet = async () => {
    return await window.web3.currentProvider.disconnect()
}

export const getWalletAddress = async () => {
    //get metamask address connected 

    // let web3;
    // if (window.ethereum) {
    //     web3 = new Web3(window.ethereum);
    // } else if (window.web3) {
    //     web3 = new Web3(window.web3.currentProvider);
    // };
    // return await web3.eth.getAccounts()
}


//tokenPrice api
export const fetchTokenPriceCoingecko = async () => {
    let cgkIds = Object.values(tokenCgkIdMap).join(",");
	let prices = await (await fetch(`${COINGECKO_API}?vs_currencies=usd&include_market_cap=true&ids=${cgkIds}`)).json()
	console.log("Coinecko price", prices)
	const priceMap: any = {}
	for (let symbol of Object.keys(tokenCgkIdMap)) {
		let cgkId = tokenCgkIdMap[symbol];
		if (prices[cgkId]) {
			const price = prices[cgkId].usd || 0;
			priceMap[symbol] = price;
		} else {
			priceMap[symbol] = 0;
		}
	}
	return priceMap
}