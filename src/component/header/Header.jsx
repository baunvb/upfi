import React, { useEffect, useState } from 'react'
import ConnectWallet from '../connectwallet/ConnectWallet'
import "./header.css"
import { useSelector, useDispatch } from 'react-redux'
import { connectWallet, disConnectWallet, getWalletAddress } from '../../data/action/WalletAction'
import { formatShortWalletAddress } from '../../utils/Util'
import DialogComponent from '../dialog/Dialog'
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import Tooltip from '@material-ui/core/Tooltip';

export default function Header() {
    const dispatch = useDispatch();
    const ConnectWalletState = useSelector(state => state.WalletReducer)
    const [open, setOpen] = useState(false)
    const [copyTooltip, setCopyToolTip] = useState("Copy")
    const [openAccount, setOpenAccount] = useState(false)

    useEffect(() => {
        dispatch(getWalletAddress())
    }, [])

    return (
        <div className="header">
            {open ? <ConnectWallet open={open} onClose={() => setOpen(false)} /> : null}
            {
                openAccount &&
                <DialogComponent
                    title="Account"
                    open={openAccount}
                    onClose={() => setOpenAccount(false)}
                >
                    <div className="header-detail-account">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>Connected</span>
                            <button className="header-btn-change btn-active"
                                onClick={() => {
                                    setOpen(true)
                                    setOpenAccount(false)
                                }}
                            >Change</button>
                        </div>
                        <span className="header-wallet-address">{formatShortWalletAddress(ConnectWalletState.myWalletAddress)}</span>
                        <div className="header-wallet-copy">
                            <Tooltip title={copyTooltip}>
                                <span style={{ display: "inline-block", marginRight: "20px" }}
                                    onClick={() => {
                                        navigator.clipboard.writeText(ConnectWalletState.myWalletAddress)
                                        setCopyToolTip("Copied")
                                    }}
                                    onMouseLeave={() => setCopyToolTip("Copy")
                                    }
                                >
                                    <span className="header-wallet-icon-action"><FaCopy /></span>
                                Copy
                            </span>
                            </Tooltip>

                            <a className="header-wallet-icon-action" href={"https://etherscan.io/address/" + ConnectWalletState.myWalletAddress} target="_blank">
                                <span className="header-wallet-icon-action"><FaExternalLinkAlt /></span>
                                View on Etherscan
                            </a>
                        </div>
                    </div>
                </DialogComponent>
            }
            {
                ConnectWalletState.myWalletAddress ?
                    <div className="header-wallet"
                        onClick={() => setOpenAccount(true)}
                    >
                        <span className="header-wallet-address">{formatShortWalletAddress(ConnectWalletState.myWalletAddress)}</span>
                        <span className="header-wallet-icon"></span>
                    </div> :
                    <button className="header-connect"
                        onClick={() => setOpen(true)}
                    >
                        Connect my wallet
                </button>
            }

        </div>
    )
}