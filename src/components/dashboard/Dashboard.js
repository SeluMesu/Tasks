import React from 'react'
import './dashboard.css'
import { reports } from '../../data/reports'
import Report from './report/Report'
const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="wrapper">
                {reports.map((report, index) =>
                    <Report key={index} report={report} />
                )}
            </div>
        </div>
    )
}
export default Dashboard;
