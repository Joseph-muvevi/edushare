import React from 'react'
import "./dashboard.css"
import Navbar from '../navbar/Navbar'
import MiniNav from '../miniNav/MiniNav'
import DashboardTop from './DashboardTop/DashboardTop'
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom"
import Ecommerce from '../eccomerce/eccomerce'

const Dashboard = () => {
  return (
	<div className="dashboard">
		<div className="dashboard-nav">
			<Navbar/>
		</div>
		<div className="dashboard-main">
			<MiniNav/>
			<Router >
				<Switch>
          			<Route path="/dashboard/ecommerce" component={withRouter(Ecommerce)}/>
					<Route path="/dashboard/me" component={withRouter(DashboardTop)}/>
				</Switch>
			</Router>
		</div>
	</div>
  )
}

export default Dashboard
