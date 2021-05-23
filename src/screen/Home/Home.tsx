import React, { useEffect, useState } from 'react'
import injectSheet from 'react-jss'
import Web3 from 'web3'
import { Abis } from '../../abis/Abis'
import "./home.css"
import { PROVIDER, CONTRACTS_ADDRESS, WALLET_ADDRESS } from "../../utils/Constants"
import TVL from './component/tvl/TVL'
import Token from './component/token/Token'
import Logo from "../../assets/images/logo.png"
import FarmCard from './component/farm/FarmCard'
import FoundryCard from './component/foundry/FoundryCard'
import Constracts from '../../contracts/Contracts'
import { formatCurrency, unit256ToNumber } from '../../utils/Util'
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER))
const ironContract = new web3.eth.Contract(Abis.IronAbi, CONTRACTS_ADDRESS)

const IronContract = Constracts.IRON


function Home(props: any) {
    const [ironPrice, setIronPrice] = useState(0)
    const [ironSupply, setIronSupply] = useState(0)
    const [ironMarketCap, setIronMarketCap] = useState(0)

    const [steelPrice, setSteelPrice] = useState(0)
    const [steelSupply, setSteelSupply] = useState(0)
    const [steelMarketCap, setSteelMarketCap] = useState(0)
    useEffect(() => {
        async function fetchTokenData() {
            const supply = await IronContract.methods.totalSupply().call();
            console.log("Supply::", supply)
            setIronSupply(unit256ToNumber(supply))

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
                        price={0.995}
                        supply={formatCurrency(ironSupply)}
                        marketCap={9.8}
                    />
                </div>
                <div>
                    <Token
                        tokenLogo={Logo}
                        tokenName={"STEEL"}
                        price={0.995}
                        supply={10}
                        marketCap={9.8}
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

const styles = {
    title: {
        color: "red",
        '&:hover': {
            color: "pink"
        }
    }
}

export default injectSheet(styles)(Home)
