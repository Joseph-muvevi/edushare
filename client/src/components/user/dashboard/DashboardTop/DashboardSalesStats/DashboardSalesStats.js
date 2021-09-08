import React from 'react'
import DashboardSalesStatsCards from './DashboardSalesStatsCards'

const DashboardSalesStats = () => {
    return (
        <div className="dashboard-sales-stats">
            <div className="dashboard-sales-stats-content">
                <h3 className="dashboard-sales-stats-item">
                    Occupied by sales graph here
                </h3>
            </div>
            <div className="dashboard-sales-stats-cards">
                <DashboardSalesStatsCards/>
            </div>
        </div>
    )
}

export default DashboardSalesStats
