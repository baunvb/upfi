// const DAI_SC = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
// const DAI_WALLET_ADDRESS = "0x74EB434eF2e55CBD3c78f0E1Acc3b04064A6917A"

export const IRON_SC = "0x7b65b489fe53fce1f6548db886c08ad73111ddd8"
export const IRON_WALLET_ADDRESS = "0x26e49b5ae7e9b6c8c7c9b8506da6b3b321c7431c"

export const CONTRACTS_ADDRESS = IRON_SC
export const WALLET_ADDRESS = IRON_WALLET_ADDRESS


// run command $ ganache-cli -f https://mainnet.infura.io/v3/901c7a2bcb15419d9973e6e71be1378b -d -i 66 1 --unlock [WALLET_ADDRESS]
// const PROVIDER = "https://mainnet.infura.io/v3/901c7a2bcb15419d9973e6e71be1378b"
// const PROVIDER = "https://api.bscscan.com/api?module=contract&action=getabi&address=0x0000000000000000000000000000000000001004&apikey=D58HXG385XMUJSRQQH6MW47EMWTXC7TVBP"
export const PROVIDER = "https://apis.ankr.com/cc6cbaa7d14f4bfab6efbdd4b17594c0/2146606aabd8e0a6683c9920dccf924b/binance/full/main"

export const tokenCgkIdMap = {
    IRON: "iron-stablecoin",
    STEEL: "steel",
	YFI: "yearn-finance",
	PICKLE: "pickle-finance",
	BTC: "bitcoin",
	ETH: "ethereum",
	LINK: "chainlink",
	USDT: "tether",
	YFV: "yfv-finance",
	USDC: "usd-coin",
	WBTC: "wrapped-bitcoin",
	crvRenWSBTC: "wrapped-bitcoin",
	vUSD: "usd-coin",
	DAI: "usd-coin",
	aLINK: "aave-link",
	YCURVE: "curve-fi-ydai-yusdc-yusdt-ytusd",
	yCRV: "curve-fi-ydai-yusdc-yusdt-ytusd",
	BFI: "bearn",
	Cure3Crv: "lp-3pool-curve",
	CRV: "curve-dao-token",
	BNB: "binancecoin"
}
export const COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price";
