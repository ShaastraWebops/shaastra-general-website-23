import React from 'react'
import "../styles/theme.css"
import imgabout from "../images/23_white logo-01.png"

const Theme = () => {
    return (
        <div className="theme-body">
            <div className="theme-wrapper">
            <img src={imgabout} alt="" className='about-img' />
                <div className="theme-title">
                    <h1>SPECTRALS 
                        <br></br>AND 
                        <br></br>SPLENDORS</h1>
                </div>
                {/* <div className="theme">
                        <div className="theme-btn"><a href="/Countdown">Countdown</a></div>

                </div> */}
            </div>
            </div>
            
    )
}

export default Theme