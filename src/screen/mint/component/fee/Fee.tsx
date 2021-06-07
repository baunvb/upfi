import React from 'react'
import "./fee.css"
export default function Fee(props: any) {
    return (
        <div className="fee">
            <span className="fee-row">
                <span className="fee-label">{props.label}</span>
                <span className="fee-value">{props.fee} %</span>
            </span>
            {
                props.slippage && 
                <span className="fee-row">
                <span className="fee-label">{"Slippage"}</span>
                <span className="fee-value">{props.slippage} %</span>
            </span>
            }
            <span className="fee-row">
                <span className="fee-label">{"Pool balance"}</span>
                <span className="fee-value">{props.balance}</span>
            </span>
            <span className="fee-row">
                <span className="fee-label">{"Rate"}</span>
                <span className="fee-value">
                    1 UP = {props.rate} USDC
                </span>
            </span>
        </div>
    )
}