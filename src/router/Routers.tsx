import React from 'react'
import Home from "../screen/Home/Home"
import { CurrencyExchange, HouseFill, CurrencyDollar, FileTextFill, Coin } from 'react-bootstrap-icons';
import { FaCubes, FaExchangeAlt, FaExternalLinkAlt, FaHandHoldingUsd } from 'react-icons/fa';

import MintAndRedeem from "../screen/mint/MintAndRedeem";
import Farms from "../screen/farm/Farms";
import Foundry from "../screen/foundry/Foundry";
import Treasury from "../screen/treasury/Treasury";
const SIZE = 20;

export interface route {
    path: string,
    name: string,
    component: any,
    icon: JSX.Element,
    redirect?: boolean,
    to?: string,
    subIcon?: JSX.Element,
}

export const Routers: Array<route> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        icon: <HouseFill size={SIZE} />
    },
    {
        path: "/mint-redeem",
        name: "MINT / REDEEM",
        component: MintAndRedeem,
        icon: <FaExchangeAlt size={SIZE} />
    },
    {
        path: "/farms",
        name: "Farms",
        component: Farms,
        icon: <FaCubes size={SIZE} />
    },
    {
        path: "/staking",
        name: "Staking",
        component: Foundry,
        icon: <CurrencyDollar size={SIZE} />
    },
    {
        path: "/treasury",
        name: "Treasury",
        component: Treasury,
        icon: <FaHandHoldingUsd size={SIZE} />
    },
    {
        path: "/document",
        redirect: true,
        to: "https://docs.upfi.network",
        name: "Document",
        component: null,
        icon: <FileTextFill size={SIZE} />,
        subIcon: <FaExternalLinkAlt size={10} />
    }
]