import { CONNECT_WALLET, GET_CONNECTED_WALLET_ACC } from "../action/WalletAction"

const initState = {
    isWalletConnecting: false,
    myWalletAddress: "",
}

export const WalletReducer = (state = initState, action) => {
    switch (action.type) {
        case CONNECT_WALLET.LOADING:
            return {
                ...state,
                isWalletConnecting: true
            }
        case CONNECT_WALLET.SUCCESS:
            return {
                ...state,
                isWalletConnecting: false,
                myWalletAddress: action.payload[0]
            }
        case CONNECT_WALLET.ERROR:
            return {
                ...state,
                isWalletConnecting: false,
            }

        case GET_CONNECTED_WALLET_ACC.SUCCESS:
            var address = "";
            if(action.payload.length > 0) {
                address = action.payload[0]
            }
            return {
                ...state,
                myWalletAddress: address
            }
        default:
            return state
    }
}