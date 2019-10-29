import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//conponenets
import Error400 from '../components/pages/Error404'
import Dashboard from '../components/dashboard/Dashboard';
import Sidebar from "../components/sidebar/Sidebar";
import Toolbar from '../components/toolbar/Toolbar';
import Progress from '../components/Progress'
import Chats from '../components/chat/Chats'
import Layout from '../components/Layout'
import People from '../components/People'
import Files from '../components/Files'
import Mail from '../components/Mail'
// import SidebarComponent from '../components/hoc/sidebarComponent'
const Routes = () => {
    return (
        <Switch>

            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/progress" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <Progress />
                        </div>
                    </>
                )
            }} />
            <Route exact path="/layouts" render={() => {
                return (
                    <Layout />
                )
            }} />
            <Route exact path="/people" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <People />
                            <Dashboard />
                        </div>
                    </>
                )
            }} />
            <Route exact path="/files" render={() => {
                return (
                    <Files />
                )
            }} />
            <Route exact path="/chats" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <Chats />
                        </div>
                    </>
                )
            }} />
            <Route exact path="/mail" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container"  >
                            <Sidebar />
                            <Mail />
                        </div>
                    </>
                )
            }} />
            <Route component={Error400} />
        </Switch>
    )
}

export default Routes
