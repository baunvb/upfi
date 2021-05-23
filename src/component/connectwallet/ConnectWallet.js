import React, { useState } from 'react'
import DialogComponent from '../dialog/Dialog'
import MetaMaskLogo from '../../assets/images/metamask_logo.png'
import TrustWalletLogo from '../../assets/images/trustwallet_logo.svg'
import "./connectwallet.css"
function ItemConnecWallet(props) {
    return (
        <div className="item-connect-wallet"
            onClick={() => props.action()}
        >
            <span>{props.name}</span>
            <img alt="" src={props.logo} />
        </div>
    )
}

export default function ConnectWallet(props) {

    return (
        <DialogComponent
            open={props.open}
            onClose={() => props.onClose()}
            title={"Connect to a wallet"}
        >
            <div>
                <ItemConnecWallet
                    name="MetaMask"
                    logo={MetaMaskLogo}
                    action={() => {alert("Metamark")}}
                />

                <ItemConnecWallet
                    name="TrustWallet"
                    logo={TrustWalletLogo}
                    action={() => {alert("TrustWallet")}}

                />
            </div>
        </DialogComponent>
    )
}