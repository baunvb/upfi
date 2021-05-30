import React from 'react'
import "./foundry.css"
import Logo from "../../assets/images/logo_round.png"
export default function Foundry(props) {
    return (
        <div className="foundry">
            <div className="foundry-header">
                <img alt="" src={Logo}/>
                <div>
                    <span>Stake with your UTK</span>
                    <span>Deposit UTK and earn profit from each epoch</span>
                </div>
            </div>
        </div>
    )
}