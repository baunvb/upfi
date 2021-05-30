import { FETCH_COINGECKO_PRICE } from "../action/TokenPriceAction"

const initState = {
    tokenPrice: {}
}

export const TokenPriceReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_COINGECKO_PRICE.SUCCESS:
            return {
                ...state,
                tokenPrice: action.payload
            }
        default:
            return state
    }
}