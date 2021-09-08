import React from 'react'
import "./mininav.css"

const MiniNav = () => {
    return (
        <div className="mini-nav">
            <div className="mini-nav-content">
                <input type="search" />
                <ul className="mini-nav-ul">
                    <li className="mini-nav-li">Notification</li>
                    <li className="mini-nav-li">Cart</li>
                    <li className="mini-nav-li">Messages</li>
                    <li className="mini-nav-li">User icon</li>
                </ul>
            </div>
        </div>
    )
}

export default MiniNav
