import React from 'react';
import './item.css'
import Divider from '../Divider/Divider';
import {ReactComponent as Delete} from '../../assets/icon/delete.svg';
import {ReactComponent as Add} from '../../assets/icon/plus.svg';
import {ReactComponent as Remove} from '../../assets/icon/minus.svg';
// import Coke from '../../assets/img/coke.png';


const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div className="cart-flex">
                <img src={props.image} alt="img" className="cart-img mr-16" />
                <div className="cart-tag">
                    <h3 className="prod-header">{props.name}</h3>
                    <p className="prod-price sm">₦ {props.price}</p>
                </div>
            </div>
            <Divider />
            <div className="desc mt-12">
                <div className="desc pointer" onClick={props.onDeleteItem}>
                    <Delete className="mr-13" /> <p className="prod-header">Delete</p> 
                </div>
                <div className="desc"> 
                    <div className="cart-border pointer" onClick={props.onDecreaseCart}>
                        <Remove />
                    </div>
                    <p className="cart-qty">{props.qty}</p>
                    <div className="cart-border pointer" onClick={props.onIncreaseCart}>
                        <Add />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
