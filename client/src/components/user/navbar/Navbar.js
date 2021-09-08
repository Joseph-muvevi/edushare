import { faChartPie, faCartPlus, faChartLine, faWallet, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-intro">
                <h3>Edushare</h3>
                <h3 className="navbar-content-li">Image here</h3>
            </div>
            <ul className="navbar-content-ul">
                <Link to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faChartPie}/>
                    Dashboard
                </Link>
                <Link to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faCartPlus}/>
                    Product
                </Link>
                <Link to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faChartLine}/>
                    Analitics
                </Link>
                <Link to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faWallet}/>
                    Ecommerce
                </Link>
                <Link to="/dashboard" className="navbar-content-li">
                    <FontAwesomeIcon icon={faComments}/>
                    Messaging
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
