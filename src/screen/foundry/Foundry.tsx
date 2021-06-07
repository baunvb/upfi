import React from 'react'
import "./foundry.css"
import Logo from "../../assets/images/logo_round.png"
import Card from '../../component/card/Card'
import Countdown from 'react-countdown';

export default function Foundry(props: any) {

    const CountDownComponent = (props: any) => {
        const { days, hours, minutes, seconds, completed } = props;
        if (days == 0) {
            return <span>{hours}:{minutes}:{seconds}</span>;
        } else if (days > 1) {
            return <span>{days} days, {hours}:{minutes}:{seconds}</span>;
        } else {
            return <span>{days} day, {hours}:{minutes}:{seconds}</span>;
        }
    }

    return (
        <div className="foundry">
            <div className="foundry-header">
                <img alt="" src={Logo} />
                <div>
                    <span>Stake with your UPS</span>
                    <span>Deposit UPS and earn profit from each epoch</span>
                </div>
            </div>

            <div className="home-grid">
                <Card>
                    <div className="foundry-epoch">
                        <span className="foundry-epoch-current ">Epock: 0</span>
                    </div>
                </Card>

                <Card>
                    <div className="foundry-epoch">
                        <div className="foundry-epoch-next">
                            <span>Next epoch</span>
                            <span><Countdown
                                date={new Date(2021, 5, 9)}
                                renderer={CountDownComponent}
                            /></span>
                        </div>
                    </div>
                </Card>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Card>
                    <div className="foundry-block-mid">
                        <div>
                            <span className="foundry-label1">Total Value Locked (TVL)</span>
                            <span className="foundry-value1">$0</span>
                        </div>
                        <div>
                            <span className="foundry-label1">UPS staked</span>
                            <span className="foundry-value1">$0</span>
                        </div>
                        <div>
                            <span className="foundry-label1">APR / Daily APR</span>
                            <span style={{ color: "#20E71C" }} className="foundry-value1">0% / 0%</span>
                        </div>
                    </div>
                </Card>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Card>
                    <div className="home-grid">
                        <div className="foundry-earn-stake">
                            <span className="foundry-labe2">Earned</span>
                            <span>
                                <span className="foundry-value2">0</span>
                                <span className="foundry-unit">USDC</span>
                            </span>
                            <div style={{ marginTop: "21px" }}>
                                <button className="foundry-btn btn btn-active">Claim rewards</button>
                            </div>
                        </div>
                        <div className="foundry-earn-stake">
                            <span className="foundry-labe2">My share</span>
                            <span>
                                <span className="foundry-value2">0</span>
                                <span className="foundry-unit">UPS</span>
                            </span>
                            <div style={{ display: "flex", marginTop: "21px" }}>
                                <button className="btn-no-bg">Unstake</button>
                                <button className="foundry-btn btn btn-active">Stake</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>



        </div>
    )
}