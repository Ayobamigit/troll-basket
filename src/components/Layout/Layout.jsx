import React from 'react'
import FooterNav from '../FooterNav/FooterNav'
import Time from '../TimeBattery/Time'
import './layout.css'

const Layout = (props) => {
    return (
        <div className="layout">
           <div id="header">
               <Time />
            </div>

            <div>
                {props.children}
            </div> 

            <div>
                <FooterNav />
            </div>
        </div>
    )
}

export default Layout
