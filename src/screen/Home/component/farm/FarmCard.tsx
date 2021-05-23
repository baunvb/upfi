import React from 'react'
import "./farm.css"
import Card from '../../../../component/card/Card'
import { NavLink } from 'react-router-dom'
export default function FarmCard(props: any) {
    return (

        <Card>
            <NavLink className="farm-card"
                to="/farms"
            >
                <span className="label">Earn up to</span>
                <span className="value">10.532,56% APR</span>
                <span className="label">in Farms</span>
                <span className="label-white">Go to Farms</span>
            </NavLink>
        </Card>

    )
}