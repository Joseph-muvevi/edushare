import { faChartPie, faCartPlus, faChartLine, faWallet, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-intro">
                <h3>Edushare</h3>
                <h3 className="navbar-content-li">Image here</h3>
            </div>
            <ul className="navbar-content-ul">
                <NavLink to="/dashboard/me" className="navbar-content-li">
                    <FontAwesomeIcon icon={faChartPie}/>
                    Dashboard
                </NavLink>
                <NavLink to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faCartPlus}/>
                    Product
                </NavLink>
                <NavLink to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faChartLine}/>
                    Analitics
                </NavLink>
                <NavLink to="/dashboard/ecommerce" className="navbar-content-li">
                    <FontAwesomeIcon icon={faWallet}/>
                    Ecommerce
                </NavLink>
                <NavLink to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faComments}/>
                    Messaging
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar
