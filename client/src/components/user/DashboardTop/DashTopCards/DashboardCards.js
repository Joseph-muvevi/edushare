import React from 'react'
import "../dashboardtop.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBook, faCommentsDollar, faDollarSign, faDownload } from '@fortawesome/free-solid-svg-icons'

const DashboardCards = () => {
    return (
        <div className="dashboard-cards">
            <div className="dashboard-cards-welcome">
                <h3 className="dashboard-cards-welcome-h3">
                    Welcome Back User
                </h3>
                <p className="dashboard-cards-welcome-h3">
                    Happy to see you agains!
                </p>
            </div>
           <div className="dashboard-cards-items">
                <div className="dashboard-cards-cards">
                <FontAwesomeIcon size="3x" icon={faDownload} />
                    <h3 className="dashboard-cards-left-h3">
                        500
                    </h3>
                    <p className="dashboard-cards-left-p">
                        Weekly Downloads
                    </p>
                </div>
                <div className="dashboard-cards-cards">
                <FontAwesomeIcon size="3x" icon={faCommentsDollar}/>
                    <h3 className="dashboard-cards-left-h3">
                        500
                    </h3>
                    <p className="dashboard-cards-left-p">
                        Weekly sales
                    </p>
                </div>
                <div className="dashboard-cards-cards">
                <FontAwesomeIcon size="3x" icon={faBook}/>
                    <h3 className="dashboard-cards-left-h3">
                        500
                    </h3>
                    <p className="dashboard-cards-left-p">
                        Books sold
                    </p>
                </div>
                <div className="dashboard-cards-cards">
                <FontAwesomeIcon size="3x" icon={faDollarSign}/>
                    <h3 className="dashboard-cards-left-h3">
                        500
                    </h3>
                    <p className="dashboard-cards-left-p">
                        Your wallet
                    </p>
                </div>
           </div>
        </div>
    )
}

export default DashboardCards
