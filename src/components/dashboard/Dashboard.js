import React from 'react'
import './dashboard.css'
import SidebarComponent from '../hoc/sidebarComponent'
import Item from '../Item'
const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="wrapper">
                <Item comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                <Item comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                <Item comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <Item comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            </div>
        </div>
    )
}

export default SidebarComponent(Dashboard)
