import React from 'react';
import  './banner.css';

const Banner = () => {
    return (
        <div className="banner-carousel">
            <div className="blue-banner">

                {/* Patterns */}
                <div>
                    <div className="style"></div>
                    <div className="dot green-light"></div>
                    <div className="dot yellow-light"></div>
                    <div className="dot red-dot"></div>
                    <div className="dot orange-dot"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                    <div className="style-ban"></div>
                </div>
               
                <div className="blue-banner-grid">
                    <div className="blue-item">
                        <h4 className="blue-content">Having any <span className="orange-span">issues</span> with your order? </h4>
                    </div>
                    <div>
                        <div className="btn-primary">
                            Contact us
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
