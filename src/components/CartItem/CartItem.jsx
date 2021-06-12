import React from 'react';
import './item.css'
import Divider from '../Divider/Divider';
import {ReactComponent as Delete} from '../../assets/icon/delete.svg';
import {ReactComponent as Add} from '../../assets/icon/plus.svg';
import {ReactComponent as Remove} from '../../assets/icon/minus.svg';
import Coke from '../../assets/img/coke.png';


const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div className="cart-flex">
                <img src={Coke} alt="img" className="cart-img mr-16" />
                <div className="cart-tag">
                    <h3 className="prod-header">{props.name}</h3>
                    <p className="prod-price sm">N18,099.09</p>
                </div>
            </div>
            <Divider />
            <div className="desc mt-12">
                <div className="desc">
                    <Delete className="mr-13" /> <p className="prod-header">Delete</p> 
                </div>
                <div className="desc"> 
                    <div className="cart-border">
                        <Remove />
                    </div>
                    <p className="cart-qty">24</p>
                    <div className="cart-border">
                        <Add />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
