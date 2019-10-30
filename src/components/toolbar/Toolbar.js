import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../asset/images/profile1.svg'
import logo from '../../asset/images/logo2.svg'
import './toolbar.css'
const Toolbar = () => {
    return (
        <div className="toolbar">
            <img className="brand-logo" src={logo} alt="brand logo" />
            <input placeholder="Search..." type='text' />
            <div className="profile">
                <Link to="username">
                    <img src={profile} alt="User profile" />
                </Link >
            </div>
        </div>
    )
}


export default Toolbar