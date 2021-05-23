import React from 'react'
import './sidebar.css'
import Logo from "../../assets/images/logo.png"
import { Routers } from '../../router/Routers'
import { useLocation, NavLink } from 'react-router-dom'
import { Github, Twitter, Telegram, Facebook } from 'react-bootstrap-icons';

export default function (props: any) {
    const location = useLocation()

    const SidebarItem = (props: any) => {
        var classes = "sidebar-item "
        if (props.isActive) classes += "sidebar-item-active"
        return (
            <NavLink
                className={classes}
                to={props.path}
            >
                <span className="sidebar-item-logo">{props.icon}</span>
                
                <span>{props.name}</span>
            </NavLink>
        )
    }

    const isActive = (path: string) => {
        if (path == "/") {
            if (location.pathname == "/") return true;
        } else {
            if (location.pathname == "/") return false;
            return location.pathname.includes(path)

        }
    }

    return (
        <div className="sidebar">
            <img className="logo" src={Logo} />
            <div className="sidebar-main">
                {
                    Routers.map((e, index) => {
                        return (
                            <SidebarItem
                                name={e.name}
                                path={e.path}
                                icon={e.icon}
                                isActive={isActive(e.path)}
                            />
                        )
                    })
                }
            </div>
            <div className="sidebar-footer">
                <a><span>M</span></a>
                <a><Github size={20}/></a>
                <a><Facebook size={20}/></a>
                <a><Twitter size={20}/></a>

            </div>
        </div>
    )
}