import React, { useState, useEffect } from 'react'
import './dashboard.css'
import { reports } from '../../data/reports'
import ReportCard from './report/ReportCard'
import Masonry from 'react-masonry-component'
import Error400 from '../pages/Error404'
import { Link, useRouteMatch, Switch, Route } from "react-router-dom"
const Dashboard = () => {
    const { url } = useRouteMatch();
    const [report, setReport] = useState(reports);

    return (
        <div className="flex-row main-content">
            <div style={{ width: "250px", color: "#fff", fontSize: "20px" }}>
                <p style={{ marginTop: "60px", color: "#ddd" }}>
                    Dashboard
                </p>
                <ul>
                    <li>
                        <Link to={`${url}/listview`}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24" fill="#000000">
                                    <path fill="#389bff" d="M 28.90625 1.96875 C 28.863281 1.976563 28.820313 1.988281 28.78125 2 L 11.5 2 C 9.585938 2 8 3.558594 8 5.46875 L 8 43.90625 C 8 46.160156 9.867188 48 12.125 48 L 37.875 48 C 40.132813 48 42 46.160156 42 43.90625 L 42 15.1875 C 42.027344 15.054688 42.027344 14.914063 42 14.78125 L 42 14.5 C 42.007813 14.234375 41.90625 13.972656 41.71875 13.78125 L 30.21875 2.28125 C 30.027344 2.09375 29.765625 1.992188 29.5 2 L 29.1875 2 C 29.097656 1.976563 29 1.964844 28.90625 1.96875 Z M 11.5 4 L 28 4 L 28 12.34375 C 28 14.355469 29.644531 16 31.65625 16 L 40 16 L 40 43.90625 C 40 45.074219 39.054688 46 37.875 46 L 12.125 46 C 10.945313 46 10 45.074219 10 43.90625 L 10 5.46875 C 10 4.644531 10.660156 4 11.5 4 Z M 30 4.9375 L 39.0625 14 L 31.65625 14 C 30.722656 14 30 13.277344 30 12.34375 Z M 17 24 L 17 26 L 33 26 L 33 24 Z M 17 28 L 17 30 L 33 30 L 33 28 Z M 17 32 L 17 34 L 33 34 L 33 32 Z M 17 36 L 17 38 L 26 38 L 26 36 Z" />
                                </svg>
                            </i>
                            <span>List View</span>
                        </Link>

                    </li>
                    <li>
                        <Link to={`${url}/gridview`}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24" fill="#000000">
                                    <path fill="#389bff" d="M 28.90625 1.96875 C 28.863281 1.976563 28.820313 1.988281 28.78125 2 L 11.5 2 C 9.585938 2 8 3.558594 8 5.46875 L 8 43.90625 C 8 46.160156 9.867188 48 12.125 48 L 37.875 48 C 40.132813 48 42 46.160156 42 43.90625 L 42 15.1875 C 42.027344 15.054688 42.027344 14.914063 42 14.78125 L 42 14.5 C 42.007813 14.234375 41.90625 13.972656 41.71875 13.78125 L 30.21875 2.28125 C 30.027344 2.09375 29.765625 1.992188 29.5 2 L 29.1875 2 C 29.097656 1.976563 29 1.964844 28.90625 1.96875 Z M 11.5 4 L 28 4 L 28 12.34375 C 28 14.355469 29.644531 16 31.65625 16 L 40 16 L 40 43.90625 C 40 45.074219 39.054688 46 37.875 46 L 12.125 46 C 10.945313 46 10 45.074219 10 43.90625 L 10 5.46875 C 10 4.644531 10.660156 4 11.5 4 Z M 30 4.9375 L 39.0625 14 L 31.65625 14 C 30.722656 14 30 13.277344 30 12.34375 Z M 17 24 L 17 26 L 33 26 L 33 24 Z M 17 28 L 17 30 L 33 30 L 33 28 Z M 17 32 L 17 34 L 33 34 L 33 32 Z M 17 36 L 17 38 L 26 38 L 26 36 Z" />
                                </svg>
                            </i>
                            <span>Grid View</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="dashboard">
                <div className="wrapper">
                    <Masonry>
                        {report.map((report, index) =>
                            <ReportCard key={index} report={report} />
                        )}
                    </Masonry>
                </div>
            </div>
            <Switch>
                <Route exact path={`${url}/listview`} />
                <Route exact path={`${url}/girdview`} />
                <Route component={Error400} />
            </Switch>
        </div>
    )
}
export default Dashboard;
