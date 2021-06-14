import React from 'react';
import './footer.scss'
import {ReactComponent as Cart} from '../../assets/icon/cart-blue.svg';
import {ReactComponent as Home} from '../../assets/icon/home.svg';
import {ReactComponent as Wallet} from '../../assets/icon/wallet.svg';
import {ReactComponent as Deal} from '../../assets/icon/deals.svg';
import {ReactComponent as More} from '../../assets/icon/menu.svg';
import { useHistory } from 'react-router';


const FooterNav = () => {
    const history = useHistory();
    return (
        <div className="footer">
            <div className="footer-grid">
                <div className="footer-grid-item" onClick={()=>history.push('/')}>
                    <div className="center">
                        <Home className="icon-home" />
                    </div>
                    <p className="footer-menu">Home</p>
                </div>
                <div className="footer-grid-active">
                    <div className="center">
                        <Cart className="icon"  />
                    </div>
                    <p className="footer-menu">Buy</p>
                </div>
                <div className="footer-grid-item">
                    <div className="center">
                        <Deal className="icon-home" />
                    </div>
                    <p className="footer-menu">Deals</p>
                </div>
                <div className="footer-grid-item">
                    <div className="center">
                        <Wallet className="icon-home"  />
                    </div>
                    <p className="footer-menu">Wallet</p>
                </div>
                <div className="footer-grid-item">
                    <div className="center">
                        <More className="icon" />
                    </div>
                    <p className="footer-menu">More</p>
                </div>
            </div>
            
        </div>
    )
}

export default FooterNav
