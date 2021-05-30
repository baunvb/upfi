import {createActionSet} from "../../utils/ActionHelper"

export const FETCH_COINGECKO_PRICE = createActionSet("FETCH_COINGECKO_PRICE")

export const fetchCoingeckoPrice = () => ({
    type: FETCH_COINGECKO_PRICE.actionName
})