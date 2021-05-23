import Home from "../screen/Home/Home"
import { CurrencyExchange, HouseFill, CurrencyDollar, FileTextFill, Coin } from 'react-bootstrap-icons';
import MintAndRedeem from "../screen/mint/MintAndRedeem";
import Farms from "../screen/farm/Farms";
import Foundry from "../screen/foundry/Foundry";
import Treasury from "../screen/treasury/Treasury";
const SIZE = 20;
export const Routers = [
    {
        path: "/",
        name: "Home",
        component: Home,
        icon: <HouseFill size={SIZE}/>

    },
    {
        path: "/mint-redeem",
        name: "MINT / REDEEM",
        component: MintAndRedeem,
        icon: <CurrencyExchange size={SIZE}/>
    },
    {
        path: "/farms",
        name: "Farms",
        component: Farms,
        icon: <Coin size={SIZE}/>
    },
    {
        path: "/foundry",
        name: "Foundry",
        component: Foundry,
        icon: <CurrencyDollar size={SIZE}/>
    },
    {
        path: "/treasury",
        name: "Treasury",
        component: Treasury,
        icon: <CurrencyDollar size={SIZE}/>
    },
    {
        path: "/document",
        name: "Document",
        component: null,
        icon: <FileTextFill size={SIZE}/>
    },
]