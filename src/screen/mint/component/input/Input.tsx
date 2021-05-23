import React from 'react'
import "./mint.css"
export default function Input(props: any) {
    return (
        <div className="mint-item">
            <div className="mint-item-top">
                <span>{props.label} {props.rate ? "(" + props.rate + "%)" : ""}</span>
                <span>Balance: {props.balance}</span>
            </div>
            <div className="mint-item-bottom">
                <input className="mint-item-input" value={props.value}
                    type="number"
                    disabled={props.disabled}
                    onChange={(e: any) => {
                        if(e.target.value >= 0) props.onChange(e.target.value)
                    }}
                    placeholder="0.0"
                />
                <button className="mint-btn-max"
                    onClick={() => props.onMax()}
                >MAX</button>
                <span className="mint-token">
                    <img className="mint-icon" src={props.icon}/>
                    <span className="mint-tokenname">{props.tokenName}</span>
                </span>
            </div>
        </div>
    )
}
