import React, { useState, useRef, useEffect } from 'react'
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


const Slippage = (props: any) => {
    const [slippageIndex, setSlippageIndex] = useState(1)
    const slippageRef = useRef(null);


    useEffect(() => {
        function handleClickOutside(event: any) {
            if (slippageRef.current && !slippageRef.current.contains(event.target)) {
                props.hide()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    return (
        !props.isShow ? null : <div
            ref={slippageRef}
            style={{
                width: "100%",
                position: "relative"
            }}>
            <div
                style={{
                    position: "absolute",
                    width: "auto",
                    right: "20px",
                    top: "-20px",
                    background: "rgb(26, 29, 47)",
                    height: "100px",
                    borderRadius: "10px",
                    padding: "16px",
                    color: "#fff",
                    fontSize: "14px"
                }}
            >
                <span>Slippage tollerance</span>
                <ul className="mint-ul-slippage">
                    <li
                        className={slippageIndex == 0 ? "btn-active" : ""}
                        onClick={() => {
                            props.setSlippage(0.1)
                            setSlippageIndex(0)
                        }}>0.1%</li>
                    <li
                        className={slippageIndex == 1 ? "btn-active" : ""}

                        onClick={() => {
                            props.setSlippage(0.5)
                            setSlippageIndex(1)
                        }}>0.5%</li>
                    <li
                        className={slippageIndex == 2 ? "btn-active" : ""}

                        onClick={() => {
                            props.setSlippage(1)
                            setSlippageIndex(2)
                        }}>1%</li>
                    <li
                        className={slippageIndex == 3 ? "btn-active" : ""}

                    >
                        <input
                            className="mint-slippage-input"
                            type="number"
                            value={props.slippage}
                            onChange={(e: any) => {
                                props.setSlippage(e.target.value)
                                setSlippageIndex(3)
                            }}
                        />
                        <span>%</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default function Mint() {
    const [sampleValue, setValue] = useState(0)
    const [slippage, setSlippage] = useState(0.5)
    const [isShowSlippage, setIsShowSlippage] = useState(false)
    const check = () => {
        return sampleValue > 0
    }

    return (
        <Card>
            <div className="mint-header">
                <span>MINT</span>
                <div className="mint-setting">
                    <GearFill size={20} 
                        onClick={() => setIsShowSlippage(true)}
                    />
                </div>

            </div>
            <Slippage 
                hide={() => setIsShowSlippage(false)}
                isShow={isShowSlippage}
                slippage={slippage}
                setSlippage={(value: number) => setSlippage(value)}
            />
            <div className="mint-swap">
                <Input
                    label="Input"
                    rate={95}
                    value={sampleValue}
                    balance={100}
                    icon={USDCLogo}
                    tokenName={"USDC"}
                    onMax={() => setValue(100)}
                    onChange={(value: any) => setValue(value)}
                />
                <img className="icon-swap" src={IcPlus} />
                <Input
                    label="Input"
                    rate={5}
                    value={sampleValue}
                    balance={100}
                    icon={UPSLogo}
                    tokenName={"UPS"}
                    onMax={() => setValue(100)}
                    onChange={(value: any) => setValue(value)}
                />
                <img className="icon-swap" src={IcResult} />
                <Input
                    label="Output"
                    disabled
                    value={sampleValue}
                    balance={11245}
                    icon={Icon}
                    tokenName={"UP"}
                    onMax={() => setValue(100)}
                    onChange={(value: any) => setValue(value)}
                />
            </div>
            <button className={check() ? "mint-redeem-button-submit btn-active" : "mint-redeem-button-submit"}
                onClick={() => { }}
            >
                Approve to MINT
            </button>
            <Fee
                label="Minting fee"
                fee={0.1}
                slippage={slippage}
                balance={1000000000}
                rate={1.00002}
            />
        </Card>
    )
}