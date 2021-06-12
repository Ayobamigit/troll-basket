import React from 'react'
import {ReactComponent as Left} from '../../assets/icon/left.svg';

const ProductDescription = () => {
    return (
        <div className="product-footer mb-04">
            <div className="desc">
            <h3 className="prod-header">Product Description</h3>
            <Left className="pointer" />
            </div>
        </div>
    )
}

export default ProductDescription
