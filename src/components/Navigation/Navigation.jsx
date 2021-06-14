import React from 'react';
import './nav.css';
import {ReactComponent as Cart} from '../../assets/icon/cart.svg';
import {ReactComponent as Right} from '../../assets/icon/right.svg';
import {ReactComponent as Search} from '../../assets/icon/lesssearch.svg';
import { useHistory } from 'react-router';


const Navigation = (props) => {
    const history = useHistory();
    return (
        <div className="nav-grid">
            <div>
                <div className="background-square pointer" onClick={()=>history.goBack()}>
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
                        <div className="background pointer" onClick={()=>history.push("/cart")}>
                            <Cart />
                            {
                                props.cartItem ?
                                    <div className="background-toggle">
                                        {props.cartItem}
                                    </div>
                                :
                                null
                            }
                            
                        </div>
                    </div>
                : null
            }
            
        </div>
    )
}

export default Navigation
