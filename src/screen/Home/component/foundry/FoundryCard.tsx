import React from 'react'
import "./foundry.css"
import Card from '../../../../component/card/Card'
import { NavLink } from 'react-router-dom'
import Countdown from 'react-countdown';
const COUNT_DOWN_TIME = 20 * 24 * 60 * 60 * 1000 //20days
export default function FoundryCard(props: any) {
    const CountDownComponent = (props: any) => {
        const { days, hours, minutes, seconds, completed } = props;
        var dayStr = "day"
        if(days <= 1) {
            dayStr = "day"
        }
        if(days > 1) {
            dayStr = "days"
        }
        if (completed) {
            return null
          } else {
            return <span>{days} {dayStr}, {hours}:{minutes}:{seconds}</span>;
          }
    }

    return (

        <Card>
            <NavLink className="foundry-card"
                to="/foundry"
            >
                <span className="label">Foundry</span>

                <span className="value">
                    <Countdown 
                        date = {Date.now() + COUNT_DOWN_TIME}
                        renderer={CountDownComponent}
                    />
                </span>
                <span className="label">next epoch</span>
                <span className="label-white">Go to Foundry</span>
            </NavLink>
        </Card>

    )
}