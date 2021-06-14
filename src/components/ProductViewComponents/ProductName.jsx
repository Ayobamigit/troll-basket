import React, { useContext } from 'react'
import { ProductContext } from '../../pages/ProductView/Product'

const ProductName = () => {
    const {productDetails} = useContext(ProductContext)
    return (
        <div className="product-footer mb-04">
            <h3 className="prod-header">{productDetails? productDetails.name: 'NIKE Huararche 2019'}</h3>
            <p className="prod-content">{productDetails? productDetails.description:'Get comfy and comfortable with the new 2019 designer sneaker for all your events '}</p>
            <h3 className="prod-price mt-18">{productDetails? productDetails.price:'N45,000 - N80,000'}<span className="prod-content">/Piece</span></h3>
            
        </div>
    )
}

export default ProductName
