import React, { useState } from 'react'
import Card from '../../../component/card/Card'
import { GearFill } from 'react-bootstrap-icons';
import "./mint.css"
import Icon from "../../../assets/images/logo.png"
import Input from '../component/input/Input';
import IcPlus from '../../../assets/images/ic_plus.png'
import IcResult from '../../../assets/images/ic_result.png'
import Fee from '../component/fee/Fee';

export default function Redeem(props: any) {
    const [valueBusd, setBusd] = useState(0)

    return (
        <Card>
            <div className="mint-header">
                <span>REDEEM</span>
                <div className="mint-setting">
                    <GearFill size={20} />
                </div>
            </div>

            <div className="mint-swap">
                <Input
                    label="Input"
                    rate={60}
                    value={valueBusd}
                    balance={100}
                    icon={Icon}
                    tokenName={"BUSD"}
                    onMax={() => setBusd(100)}
                    onChange={(value: any) => setBusd(value)}
                />
                <img className="icon-swap" src={IcPlus} />
                <Input
                    label="Input"
                    rate={40}
                    value={valueBusd}
                    balance={100}
                    icon={Icon}
                    tokenName={"BUSD"}
                    onMax={() => setBusd(100)}
                    onChange={(value: any) => setBusd(value)}
                />
                <img className="icon-swap" src={IcResult} />
                <Input
                    label="Output"
                    disabled
                    value={valueBusd}
                    balance={11500}
                    icon={Icon}
                    tokenName={"BUSD"}
                    onMax={() => setBusd(100)}
                    onChange={(value: any) => setBusd(value)}
                />
            </div>
            <button className="mint-redeem-button-submit"
                onClick={() => {}}
            >
                Approve to REDEEM
            </button>
            <Fee
                label="Redemption fee"
                fee={0.15}
                balance={1000000000}
                rate={1.00002}
            />
        </Card>
    )
}