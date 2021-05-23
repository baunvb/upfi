import React, { useState } from 'react'
import Mint from './mint/Mint'
import Redeem from './redeem/Redeem'
import "./mintredeem.css"

export default function (props: any) {
    const [type, setType] = useState("mint")

    const isActive = (tab: string) => {
        return type == tab
    }
    return (
        <div className="mint-redeem">
            <div className="mint-redeem-tabs">
                <button className={isActive("mint") ? "mint-redeem-tab mint-redeem-active" : "mint-redeem-tab"}
                    onClick={() => setType("mint")}
                >
                    MINT
                </button>
                <button className={isActive("redeem") ? "mint-redeem-tab mint-redeem-active" : "mint-redeem-tab"}
                    onClick={() => setType("redeem")}
                >
                    REDEEM
                </button>
            </div>

            {
                type == "mint" ? <Mint /> : <Redeem /> 
            }
        </div>
    )
}