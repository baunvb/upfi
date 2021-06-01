import React from 'react'
import Card from '../../../../component/card/Card'
import "./token.css"

export default function (props: any) {
    return (
        <Card>
            <div className="token">
                <div>
                    <img src={props.tokenLogo}/>
                    <span className="name">{props.tokenName}</span>
                </div>
                <div>
                    <span className="price-label">Price: </span>
                    <span className="price">$ {props.price}</span>
                </div>
            </div>
            <div>
                <span className="supply-label">Supply: <span className="supply">{props.supply}</span></span>
                <span className="marketcap-label">Market cap: <span className="marketcap">{props.marketCap}</span></span>
            </div>
        </Card>
    )
}