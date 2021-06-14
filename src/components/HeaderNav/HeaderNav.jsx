import React, { useContext } from 'react';
import './header.css';
import {ReactComponent as Map} from '../../assets/icon/map.svg';
// import {ReactComponent as Down} from '../../assets/icon/down.svg';
import {ReactComponent as Cart} from '../../assets/icon/cart.svg';
import {ReactComponent as Order} from '../../assets/icon/order.svg';
import { useHistory } from 'react-router';
import { HomeContext } from '../../pages/Home/Home';

const HeaderNav = () => {
    const {onChange, searchValues} = useContext(HomeContext)
    const {cartItem} = JSON.parse(localStorage.getItem('details'))

    const history = useHistory();
    return (
        <div className="header-nav">
            <div className="header-grid pointer">
                <div className="header-grid-item br">
                    <div className="background">
                        <Map />
                    </div>
                    <select className="selectForm" onChange={onChange} name="location" value={searchValues.location} >
                        <option value="">All</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja">Abuja</option>
                        <option value="jos">Jos</option>
                        <option value="kaduna">Kaduna</option>
                        <option value="oyo">Oyo</option>
                    </select>
                    {/* <p className="header-text">Lagos</p>
                    <Down className="mt-05" />  */}
                </div>
                <div className="header-grid-item br">
                    <div className="background">
                            <Order />
                    </div>
                    <p className="header-text">My Orders</p>
                </div>
                <div className="header-grid-item" onClick={()=>history.push('/cart')}>
                    <div className="background">
                        <Cart />
                        {
                            cartItem ?
                            <div className="background-toggle">
                                {cartItem}
                            </div>
                            :
                            null
                        }
                        
                    </div>
                    <p className="header-text">Cart</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav
