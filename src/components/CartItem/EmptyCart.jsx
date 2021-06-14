import React from 'react';
import { useHistory } from 'react-router';
import './item.css'

const EmptyCart = () => {
    const history = useHistory()
    return (
        <div className="cart-item">
            <div className="cart-tag center">
                <p className="prod-price sm mt-18 ">Your Cart is Empty</p>
                <div className="btn-primary size mt-18 mb-16" onClick={()=>history.push('/')}>
                    Click to shop
                </div>
            </div>

            
        </div>
    )
}

export default EmptyCart
