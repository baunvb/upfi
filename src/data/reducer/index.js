import {combineReducers} from "redux";
import { TokenPriceReducer } from "./TokenPriceReducer";
import {WalletReducer} from "./WalletReducer"
const AppReducer = combineReducers({
    WalletReducer,
    TokenPriceReducer
})

export default AppReducer
