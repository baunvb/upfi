import BigNumber from "bignumber.js";
BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
})
export const formatCurrency = (number) => {
    console.log("Bignumber", number)
    if (number <= 1) return number
    return Boolean(number) ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;

}

export function unit256ToNumber(value, decimal = 18, fixNumber = 3) {
	return Number(new BigNumber(value).div(new BigNumber(10).pow(decimal)).toFixed(fixNumber))
}
