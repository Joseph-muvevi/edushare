import React from 'react'
import DashboardTopGraph from './DashboardTopGraph/DashboardTopGraph'
import DashboardCards from './DashTopCards/DashboardCards'

const DashboardTop = () => {
    return (
        <div className="dashboard-top">
            <div className="dashboard-top-content">
                <div className="dashboard-top-content-row">
                    <DashboardCards/>
                </div>
                <div className="dashboard-top-content-graphs">
                    <DashboardTopGraph/>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop
