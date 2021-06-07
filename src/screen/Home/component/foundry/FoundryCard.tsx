import React from 'react'
import "./foundry.css"
import Card from '../../../../component/card/Card'
import { NavLink } from 'react-router-dom'
import Countdown from 'react-countdown';
const COUNT_DOWN_TIME = 20 * 24 * 60 * 60 * 1000 //20days
export default function FoundryCard(props: any) {
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

        <Card>
            <NavLink className="foundry-card"
                to="/staking"
            >
                <span className="label">Staking</span>

                <span className="value">
                    <Countdown 
                        date = {new Date(2021, 5, 15)}
                        renderer={CountDownComponent}
                    />
                </span>
                <span className="label">next epoch</span>
                <span className="label-white">Go to Staking</span>
            </NavLink>
        </Card>

    )
}