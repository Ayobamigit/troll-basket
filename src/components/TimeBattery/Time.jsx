import React from 'react';
import './time.css';
import {ReactComponent as Wifi} from '../../assets/icon/wifi.svg';
import {ReactComponent as Battery} from '../../assets/icon/battery.svg';
import {ReactComponent as Bars} from '../../assets/icon/bars.svg';

const Time = (props) => {
    return (
        <div className="time-grid-container">
            <div className="time-item">
                <h3 className={`time ${props.timeWhite ? props.timeWhite : ''}`}>9:41</h3>
            </div>
            <div className="time-item2">
                <Bars className={`${props.className ? props.className :'icon-black'}` }/> <Wifi className={`${props.className ? props.className :'icon-black'}` } /> <Battery className={`${props.className ? props.className :'icon-black'}` }/>
            </div>
            {/* <div className="time-grid-item"></div> */}
        </div>
    )
}

export default Time
