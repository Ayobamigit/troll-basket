import React from 'react'
import Time from '../../components/TimeBattery/Time';
import {ReactComponent as Check} from '../../assets/icon/glossy.svg';
import './checkout.css'
import { useHistory } from 'react-router';

const Checkout = () => {
    const history = useHistory();
    return (
        <div className="checkout">
            <Time className="icon-white" timeWhite="time-white" />
            <div className="center pad">
                <div className="check-div auto">
                    <Check />
                </div>
                <div>
                    <h4 className="check-header">Checkout Successful</h4>
                    <p className="check-text">Your checkout is now successful.</p>
                </div>

                <div className="btn-white top" onClick={()=>history.push("/")}>
                    Got it
                </div>
            </div>
        </div>
    )
}

export default Checkout
