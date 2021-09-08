import React from 'react'
import "./dashboard.css"
import Navbar from '../navbar/Navbar'
import MiniNav from '../miniNav/MiniNav'
import DashboardTop from '../DashboardTop/DashboardTop'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard-nav">
			<Navbar/>
		</div>
        <div className="dashboard-main">
			<MiniNav/>
			<DashboardTop/>
        </div>
    </div>
  )
}

export default Dashboard
