import React, { useState } from 'react'
import DialogComponent from '../dialog/Dialog'
import MetaMaskLogo from '../../assets/images/metamask_logo.png'
import TrustWalletLogo from '../../assets/images/trustwallet_logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import "./connectwallet.css"
import { connectWallet } from '../../data/action/WalletAction'
import Loading from '../loading/Loading'

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
    const dispatch = useDispatch();
    const ConnectWalletState = useSelector(state => state.WalletReducer)
    const connectMetaMask = () => {
        if (ConnectWalletState.isWalletConnecting) return

        const isMetaMaskInstalled = () => {
            const { ethereum } = window;
            return Boolean(ethereum && ethereum.isMetaMask);
        };

        const connect =  () => {
            const { ethereum } = window;
            dispatch(connectWallet(ethereum))
        };

        const MetaMaskClientCheck = () => {
            if (!isMetaMaskInstalled()) {
                alert("please install metamask")
            } else {
                connect()
            }
        };

        MetaMaskClientCheck();
    };

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
                    action={() => connectMetaMask()}
                />

                <ItemConnecWallet
                    name="TrustWallet"
                    logo={TrustWalletLogo}
                    action={() => { alert("Do not support") }}

                />
                {
                    ConnectWalletState.isWalletConnecting && 
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                        }}>
                        <Loading/>
                    </div>
                }

            </div>
        </DialogComponent>
    )
}