import React, { useState } from 'react'
import Card from '../../../component/card/Card'
import { GearFill } from 'react-bootstrap-icons';
import "./mint.css"
import Icon from "../../../assets/images/logo.png"
import UPSLogo from "../../../assets/images/ups_logo.png"
import USDCLogo from "../../../assets/images/usdc_logo.png"
import Input from '../component/input/Input';
import IcPlus from '../../../assets/images/ic_plus.png'
import IcResult from '../../../assets/images/ic_result.png'
import Fee from '../component/fee/Fee';

export default function Redeem() {
    const [sampleValue, setSampleValue] = useState(0)

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
                    value={sampleValue}
                    balance={100}
                    icon={Icon}
                    tokenName={"UP"}
                    onMax={() => setSampleValue(100)}
                    onChange={(value: any) => setSampleValue(value)}
                />
                <img className="icon-swap" src={IcResult} />

                <Input
                    disabled
                    rate={5}
                    label="Output"
                    value={sampleValue}
                    balance={11500}
                    icon={USDCLogo}
                    tokenName={"USDC"}
                    onMax={() => setSampleValue(100)}
                    onChange={(value: any) => setSampleValue(value)}
                />
                <img className="icon-swap" src={IcPlus} />

                <Input
                    disabled
                    label="Input"
                    rate={95}
                    value={sampleValue}
                    balance={100}
                    icon={UPSLogo}
                    tokenName={"UPS"}
                    onMax={() => setSampleValue(100)}
                    onChange={(value: any) => setSampleValue(value)}
                />
            </div>
            <button className="mint-redeem-button-submit"
                onClick={() => { }}
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