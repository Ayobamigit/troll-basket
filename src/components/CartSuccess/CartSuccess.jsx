import React from 'react';
import './success.css';
import {ReactComponent as Close} from '../../assets/icon/close.svg';

const CartSuccess = () => {
    return (
        <div className="cart-success">
            <div className="desc">
                <h3 className="success-text">Item added to cart successfully</h3>
                <Close className="pointer" />
            </div>
        </div>
    )
}

export default CartSuccess
