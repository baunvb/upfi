import React, { useState } from 'react'
import ConnectWallet from '../connectwallet/ConnectWallet'
import DialogComponent from '../dialog/Dialog'
import "./header.css"

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div className="header">
            {open ? <ConnectWallet open={open} onClose={() => setOpen(false)} /> : null}
            <button className="header-connect"
                onClick={() => setOpen(true)}
            >
                Connect my wallet
            </button>
        </div>
    )
}