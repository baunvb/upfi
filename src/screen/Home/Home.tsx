import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Web3 from 'web3'
import { Abis } from '../../abis/Abis'
import "./home.css"
import { PROVIDER, IRON_CONTRACTS_ADDRESS } from "../../utils/Constants"
import TVL from './component/tvl/TVL'
import Token from './component/token/Token'
import Logo from "../../assets/images/logo.png"
import FarmCard from './component/farm/FarmCard'
import FoundryCard from './component/foundry/FoundryCard'
import Contracts from '../../contracts/Contracts'
import { formatCurrency, unit256ToNumber } from '../../utils/Util'
import { fetchCoingeckoPrice } from '../../data/action/TokenPriceAction'
import { AppState } from '../../data/reducer'
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER))
const ironContract = new web3.eth.Contract(Abis.IronAbi, IRON_CONTRACTS_ADDRESS)

const IronContract = Contracts.IRON
const SteelContract = Contracts.STEEL

const Home: React.FC<{}> = () => {

    const dispatch = useDispatch();
    const TokenPriceReducer = useSelector((state: AppState) => state.TokenPriceReducer)
    const [ironSupply, setIronSupply] = useState(0)
    const [steelSupply, setSteelSupply] = useState(0)

    useEffect(() => {

    }, [])

    useEffect(() => {
        dispatch(fetchCoingeckoPrice())
        async function fetchTokenData() {
            setIronSupply(unit256ToNumber(await IronContract.methods.totalSupply().call()))
            setSteelSupply(unit256ToNumber(await SteelContract.methods.totalSupply().call()))
        }
        fetchTokenData();

    }, [])
    return (
        <div className="home">
            <TVL />
            <div className="home-grid">
                <div>
                    <Token
                        tokenLogo={Logo}
                        tokenName={"IRON"}
                        price={TokenPriceReducer.tokenPrice.IRON}
                        supply={formatCurrency(Math.round(ironSupply))}
                        marketCap={formatCurrency(Math.round(ironSupply * TokenPriceReducer.tokenPrice.IRON))}
                    />
                </div>
                <div>
                    <Token
                        tokenLogo={Logo}
                        tokenName={"STEEL"}
                        price={TokenPriceReducer.tokenPrice.STEEL}
                        supply={formatCurrency(Math.round(steelSupply))}
                        marketCap={formatCurrency(Math.round(steelSupply * TokenPriceReducer.tokenPrice.STEEL))}
                    />
                </div>
            </div>
            <div className="home-grid">
                <div>
                    <FarmCard />
                </div>
                <div>
                    <FoundryCard />
                </div>
            </div>
        </div>
    )
}


export default Home
