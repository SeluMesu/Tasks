import React from 'react'
import '../dashboard/dashboard.css'
import Sidebar from "../sidebar/Sidebar";
import Toolbar from '../toolbar/Toolbar';
// import Item from '../Item'
const sidebarComponent = (Component) => {
    const AllComponent = () => {
        return (
            <>
                <Toolbar />
                <div className="sidebar-container">
                    <Sidebar />
                    <Component />
                </div>
            </>
        )
    }
    return AllComponent;
}

export default sidebarComponent;