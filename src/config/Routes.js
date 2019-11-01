import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { pathRoutes } from "../utils/pathRoutes"
//conponenets
// import Dashboard from '../components/dashboard/Dashboard';
// import Progress from '../components/progress/Progress'
import Error400 from '../components/pages/Error404'
import Sidebar from "../components/sidebar/Sidebar"
import Toolbar from '../components/toolbar/Toolbar'
// import Profile from '../components/profile/Profile'
// import People from '../components/people/People'
// import Layout from '../components/layout/Layout'
// import Files from '../components/files/Files'
// import Chats from '../components/chat/Chats'
// import Mail from '../components/mail/Mail'
const Routes = () => {
    return (
        <Switch>

            {pathRoutes.map(({ path, Component }, index) => {
                if (path === "/") {
                    return (
                        <Route key={index} exact path="/" render={() => <Redirect to="/dashboard" />} />
                    )
                }
                return (
                    <Route exact path={path} render={({ match }) =>
                        <>
                            <Toolbar />
                            <div className="sidebar-container">
                                <Sidebar />
                                <Component match={match} />
                            </div>
                        </>
                    } />
                )
            })}
            <Route component={Error400} />
            {/* <Route exact path="/:username" render={() => {
                return (
                    <Profile />
                )
            }} /> */}

            {/* <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

            <Route exact path="/dashboard" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <Dashboard />
                        </div>
                    </>
                )
            }} />
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
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <Layout />
                        </div>
                    </>
                )
            }} />
            <Route exact path="/people" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <People />
                        </div>
                    </>
                )
            }} />
            <Route exact path="/files" render={() => {
                return (
                    <>
                        <Toolbar />
                        <div className="sidebar-container">
                            <Sidebar />
                            <Files />
                        </div>
                    </>
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
            <Route component={Error400} /> */}
        </Switch>
    )
}

export default Routes
