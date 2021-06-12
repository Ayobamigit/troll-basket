import React from 'react';
import './nav.css';
import {ReactComponent as Cart} from '../../assets/icon/cart.svg';
import {ReactComponent as Right} from '../../assets/icon/right.svg';
import {ReactComponent as Search} from '../../assets/icon/lesssearch.svg';


const Navigation = (props) => {
    return (
        <div className="nav-grid">
            <div>
                <div className="background-square">
                    <Right className="mt-03" />
                </div>
            </div>
            <div className="center">
                <h3 className="prod-header">{props.title}</h3>
            </div>
            {
                props.cartItems ?
                <div className="flex">
                    <div className="background mr-16">
                        <Search className="mt-03" />
                    </div>
                    <div className="background">
                        <Cart />
                        <div className="background-toggle">
                            9
                        </div>
                    </div>
                </div>
                : null
            }
            
        </div>
    )
}

export default Navigation
