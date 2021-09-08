import React from 'react'
import DashboardSalesStats from './DashboardSalesStats/DashboardSalesStats'
import DashboardTopGraph from './DashboardTopGraph/DashboardTopGraph'
import DashboardTopTable from './DashboardTopTable/DashboardTopTable'
import DashboardTopUsers from './DashboardTopUsers/DashboardTopUsers'
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
                    <DashboardTopTable/>
                    <DashboardTopUsers/>
                    <DashboardSalesStats/>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop
