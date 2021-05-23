import React from 'react'
import Card from '../../../../component/card/Card'
import "./tvl.css"
export default function TVL(props: any) {
    return (
        <Card>
            <div className="tvl">
                <span className="tvl-title">Total Value Locked (TVL)</span>
                <span className="tvl-value">{"$1,759,403,234"}</span>
            </div>
        </Card>

    )
}