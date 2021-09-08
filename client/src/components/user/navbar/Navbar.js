import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-intro">
                <h3>Edushare</h3>
                <h3 className="navbar-content-li">Image here</h3>
            </div>
            <ul className="navbar-content">
                <li className="navbar-content-li">Users</li>
                <li className="navbar-content-li">Products</li>
                <li className="navbar-content-li">Analitics</li>
                <li className="navbar-content-li">Ecommerce</li>
                <li className="navbar-content-li">Chat</li>
            </ul>
        </div>
    )
}

export default Navbar
