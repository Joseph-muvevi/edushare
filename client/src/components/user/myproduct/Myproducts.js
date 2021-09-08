import React from 'react'
import MyproductItems from './MyproductItems'

const Myproducts = () => {
    return (
        <div className="my-product">
            <div className="my-product-header">
                <h3>Your Product</h3>
            </div>
            <div className="my-product-items">
                <MyproductItems/>
            </div>
        </div>
    )
}

export default Myproducts
