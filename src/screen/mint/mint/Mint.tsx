import React, { useState } from 'react'
import Card from '../../../component/card/Card'
import { GearFill } from 'react-bootstrap-icons';
import "./mint.css"
import Icon from "../../../assets/images/logo.png"
import Input from '../component/input/Input';
import IcPlus from '../../../assets/images/ic_plus.png'
import IcResult from '../../../assets/images/ic_result.png'
import Fee from '../component/fee/Fee';

export default function Mint() {
    const [valueBusd, setBusd] = useState(0)
    const check = () => {
        return valueBusd > 0
    }
    return (
        <Card>
            <div className="mint-header">
                <span>MINT</span>
                <div className="mint-setting">
                    <GearFill size={20} />
                </div>
            </div>

            <div className="mint-swap">
                <Input
                    label="Input"
                    rate={95}
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
                    rate={5}
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
                    balance={11245}
                    icon={Icon}
                    tokenName={"BUSD"}
                    onMax={() => setBusd(100)}
                    onChange={(value: any) => setBusd(value)}
                />
            </div>
            <button className={check() ? "mint-redeem-button-submit btn-active" : "mint-redeem-button-submit"}
                onClick={() => {}}
            >
                Approve to MINT
            </button>
            <Fee
                label="Minting fee"
                fee={0.1}
                balance={1000000000}
                rate={1.00002}
            />
        </Card>
    )
}