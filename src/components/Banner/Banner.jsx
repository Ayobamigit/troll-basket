import React, { useEffect, useRef, useState } from 'react';
import  './banner.css';

const Banner = () => {

    const [index, setIndex] = useState(0);
    
    const delay = 5000;
    const timeoutRef = useRef(null)

    const resetTimeout =()=> {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() =>{
        resetTimeout();
        let prevIndex = index;
        timeoutRef.current = setTimeout(() => {
            if(prevIndex === 0){
                prevIndex = 1
            }else if(prevIndex === 1){
                prevIndex = 2
            }else if(prevIndex === 2){
                prevIndex = 0
            }
            //   prevIndex === 0 ? 1 : prevIndex === 1 ? 2 : 0
                setIndex(prevIndex)
        }, delay);
        return () => {
            resetTimeout();
        };
    }, [index])

    return (
        <div className="banner-carousel">
            <div className="slideshow">
                
                {
                    index === 0 ?
                        <div className="slide blue-banner">

                            {/* Patterns */}
                            <div>
                                <div className="style"></div>
                                <div className="dot green-light"></div>
                                <div className="dot yellow-light"></div>
                                <div className="dot red-dot"></div>
                                <div className="dot orange-dot"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green-dot"></div>
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
                        :
                    index=== 1 ?

                    <div className="slide orange-banner">
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
                    :
                    index === 2 ?
                    <div className="slide deep-banner">
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
                : null
                }






            </div>

        </div>
    )
}

export default Banner
