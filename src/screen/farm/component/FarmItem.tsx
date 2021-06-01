import React, { useState } from 'react'
import Card from '../../../component/card/Card'
import { formatCurrency } from '../../../utils/Util'
import Logo from "../../../assets/images/logo.png"
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"
import "../index.css"

import DialogComponent from '../../../component/dialog/Dialog'

const FarmItemDetail:React.FC<{}> = () => {
    const [open, setOpenStakeDialog] = useState(false)
    const [stakeAmount, setStakeAmount] = useState(0)
    return (
        <div className="farm-item-detail">
            <DialogComponent
                title={"Stake"}
                open={open}
                onClose={() => setOpenStakeDialog(false)}
            >
                <div>
                    <span className="item-farm-avaiable-balance">Avaiable balance:  <span>{0} STEEL/IRON</span> </span>

                    <div className="farm-item-wrap-amount">
                        <input
                            className="farm-item-detail-stakeamount"
                            type="number"
                            placeholder="0.0"
                            onChange={(e: any) => setStakeAmount(e.target.value)}
                            value={stakeAmount}
                        />
                        <span className="farm-item-logo">
                            <div className="farm-item-token-logo-bg">
                                <img className="farm-item-dialog-token-logo" alt="" src={Logo} />
                            </div>
                            <div className="farm-item-token-logo-bg">
                                <img className="farm-item-dialog-token-logo" alt="" src={Logo} />
                            </div>
                        </span>
                        <span>STEEL/IRON</span>

                    </div>
                    <button className="farm-item-btn-approve btn-active">Approve</button>

                </div>
            </DialogComponent>

            <div className="farm-item-detail-divider"></div>
            <div className="farm-item-detail-liquidity ">
                <span>Add liquidity</span>
                <span>Remove liquidity</span>
            </div>

            <div className="farm-item-content">
                <div className="farm-item-detail-card">
                    <span className="farm-item-detail-label">My share</span>
                    <span className="farm-item-detail-value">{formatCurrency(12035035.33)}</span>
                    <span className="farm-item-detail-token">UTK/UTK</span>
                    <div className="farm-item-detail-action">
                        <button className="farm-item-detail-btn-unstake">Unstake</button>
                        <button className="farm-item-detail-btn-stake btn-active"
                            onClick={() => setOpenStakeDialog(true)}
                        >Stake</button>
                    </div>
                </div>

                <div className="farm-item-detail-card">
                    <span className="farm-item-detail-label">Earned</span>
                    <span className="farm-item-detail-value">{formatCurrency(12035035.33)}</span>
                    <span className="farm-item-detail-token">USDT</span>
                    <div className="farm-item-detail-action">
                        <button className="farm-item-detail-btn-claim btn-active">Claim Rewards</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

 const FarmItem:React.FC<{}> = () => {
    const [isExpander, setExpander] = useState(true)
    return (
        <Card>
            <div className="farm-item">
                <div className="farm-item-header">
                    <div>
                        <div style={{ display: "flex" }}>
                            <span className="farm-item-logo">
                                <div className="farm-item-token-logo-bg">
                                    <img className="farm-item-token-logo" alt="" src={Logo} />
                                </div>
                                <div className="farm-item-token-logo-bg">
                                    <img className="farm-item-token-logo" alt="" src={Logo} />
                                </div>
                            </span>
                            <span>
                                <span className="farm-item-title">UTK-UTK</span>
                                <span className="farm-item-earn">Earn USDT</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="farm-item-label">APR</span>
                        <span className="farm-item-value">{formatCurrency(1034534)}%</span>
                    </div>

                    <div>
                        <span className="farm-item-label">Total Value Locked</span>
                        <span className="farm-item-value">{formatCurrency(123456879)}%</span>
                    </div>

                    <div className="farm-item-expander"
                        onClick={() => setExpander(e => !e)}
                    >
                        <span>Detail</span>
                        {
                            !isExpander ? <ChevronDown /> : <ChevronUp />
                        }
                    </div>
                </div>
                <div>
                    {
                        isExpander ? <FarmItemDetail /> : null
                    }
                </div>
            </div>

        </Card>
    )
}

export default FarmItem