import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
// import home from '../../asset/images/home.svg'
import { linkRoutes } from '../../utils/pathRoutes'
import { MdArrowBack as ArrowBack, MdArrowForward as ArrowForward } from 'react-icons/md'
import './sidebar.css'
function Sidebar() {
    const [open, setOpen] = useState(false);
    const handleSidebar = () => {
        setOpen(!open);
    }
    return (
        <div className={open ? "sidebar close" : "sidebar open"}>
            <nav>
                <ul className="list">
                    {linkRoutes.map((link, index) => {
                        return (
                            <li className="list__item" key={index}>
                                <NavLink activeStyle={{ color: "#399bff", background: "#1f2229", outline: "none" }} to={link.to}>
                                    <img src={link.icon} alt="icon" />
                                    <span>{link.name}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="collaps-expand">
                <button onClick={() => handleSidebar()}>
                    <i>
                        {open ? <ArrowForward /> : <ArrowBack />}
                    </i>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
