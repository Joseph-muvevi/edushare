import React from 'react'
import "../ecommerce.css"
import EcommerceAnalitics from './ecommerceAnalitics'
import EcommerceTopCards from './EcommerceTopCards'

const EcommerceTop = () => {
    return (
        <div className="eccomerce-top">
            <div className="exommerce-top-cards">
                <EcommerceTopCards/>
                <EcommerceAnalitics/>
            </div>
        </div>
    )
}

export default EcommerceTop
