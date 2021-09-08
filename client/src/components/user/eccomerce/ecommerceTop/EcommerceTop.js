import React from 'react'
import "../ecommerce.css"
import EcommerceAnalitics from './ecommerceAnalitics'
import EcommerceTopCards from './EcommerceTopCards'
import EcommerceTotals from './ecommerceTotals'

const EcommerceTop = () => {
    return (
        <div className="eccomerce-top">
            <div className="exommerce-top-cards">
                <EcommerceTopCards/>
                <EcommerceAnalitics/>
                <EcommerceTotals/>
            </div>
        </div>
    )
}

export default EcommerceTop
