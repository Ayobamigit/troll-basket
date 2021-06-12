import React from 'react';
import './header.css';
import {ReactComponent as Map} from '../../assets/icon/map.svg';
import {ReactComponent as Down} from '../../assets/icon/down.svg';
import {ReactComponent as Cart} from '../../assets/icon/cart.svg';
import {ReactComponent as Order} from '../../assets/icon/order.svg';

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <div className="header-grid">
                <div className="header-grid-item br">
                    <div className="background">
                        <Map />
                    </div>
                    <p className="header-text">Lagos</p>
                    <Down className="mt-05" />
                </div>
                <div className="header-grid-item br">
                    <div className="background">
                            <Order />
                    </div>
                    <p className="header-text">My Orders</p>
                </div>
                <div className="header-grid-item">
                    <div className="background">
                        <Cart />
                        <div className="background-toggle">
                            9
                        </div>
                    </div>
                    <p className="header-text">Cart</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav
