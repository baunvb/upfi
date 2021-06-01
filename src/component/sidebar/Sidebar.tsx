import React from 'react'
import './sidebar.css'
import Logo from "../../assets/images/logo.png"
import { route, Routers } from '../../router/Routers'
import { useLocation, NavLink } from 'react-router-dom'
import { Github, Twitter, Telegram, Facebook } from 'react-bootstrap-icons';
import { FaTelegram } from 'react-icons/fa';

interface sidebar extends route {
    isActive: boolean
}

export default function Sidebar(props: any) {
    const location = useLocation()

    const SidebarItem = (props: sidebar) => {
        var classes = "sidebar-item "
        if (props.isActive) classes += "sidebar-item-active"
        if (props.redirect) {
            return <a
                className={classes}
                href={props.to}
                target="_blank"
            >
                <span className="sidebar-item-logo">{props.icon}</span>
                <span>{props.name}</span>
                <span style={{ marginLeft: "8px", marginTop: "-4px" }}>{props.subIcon}</span>
            </a>
        } else {
            return (
                <NavLink
                    className={classes}
                    to={props.path}
                >
                    <span className="sidebar-item-logo">{props.icon}</span>
                    <span>{props.name}</span>
                    <span style={{ marginLeft: "8px", marginTop: "-4px" }}>{props.subIcon}</span>
                </NavLink>
            )
        }

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
                                {...e}
                                isActive={isActive(e.path)}
                            />
                        )
                    })
                }
            </div>
            <div className="sidebar-footer">
                <a><span>M</span></a>
                <a><Facebook size={20} /></a>
                <a><FaTelegram size={20} /></a>
                <a><Github size={20} /></a>
                <a><Twitter size={20} /></a>

            </div>
        </div>
    )
}