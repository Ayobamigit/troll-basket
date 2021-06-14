import React, { useContext } from 'react';
import './success.css';
import {ReactComponent as Close} from '../../assets/icon/close.svg';
import { ProductContext } from '../../pages/ProductView/Product';

const CartSuccess = () => {
    const {cancelSuccess} = useContext(ProductContext)
    return (
        <div className="cart-success">
            <div className="desc">
                <h3 className="success-text">Item added to cart successfully</h3>
                <Close className="pointer" onClick={cancelSuccess} />
            </div>
        </div>
    )
}

export default CartSuccess
