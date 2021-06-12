import React from 'react'
import FooterNav from '../FooterNav/FooterNav'
import Time from '../TimeBattery/Time'
import './layout.css'

const Layout = (props) => {
    return (
        <>
           <div id="header">
               <Time />
            </div>

            <div>
                {props.children}
            </div> 

            <div>
                <FooterNav />
            </div>
        </>
    )
}

export default Layout
