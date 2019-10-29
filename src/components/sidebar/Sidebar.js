import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import home from '../../asset/images/home.svg'
import { routes } from '../../utils/pathRoutes'
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
                    {routes.map((link, index) => {
                        return <li className="list__item" key={index}>
                            <NavLink activeStyle={{ color: "red" }} to={link.to}>
                                <img src={home} alt="icon" />
                                <span>{link.name}</span>
                            </NavLink>
                        </li>
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
