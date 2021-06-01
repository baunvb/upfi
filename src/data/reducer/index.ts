import {combineReducers} from "redux";
import { TokenPriceReducer } from "./TokenPriceReducer";
import {WalletReducer} from "./WalletReducer"

export type AppState = {
    WalletReducer: any
    TokenPriceReducer: any
}

const AppReducer = combineReducers({
    WalletReducer,
    TokenPriceReducer
})

export default AppReducer
