import React from 'react'
import "../styles/theme.css"
import imgabout from "../images/23_white logo-01.png"
import UIkit from 'uikit'
import { FaUikit } from 'react-icons/fa'


const Countdown = () => {
    return (
        <div className="theme-body">
            
            <img src={imgabout} alt="" className='about-img' />
            <div className='countdown'>
            <script src="css/uikit.min.css"></script>
            <script src="js/uikit.min.js"></script>
            <script src="js/uikit-icons.min.js"></script>           
                    <div class="uk-grid-small uk-child-width-auto" uk-grid uk-countdown="date: 2023-01-27T16:11:57+00:00">
            <div className='flexcount'>
                <div class="uk-countdown-number uk-countdown-days"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
                <div class="uk-countdown-separator">:</div>
                <div class="uk-countdown-number uk-countdown-hours"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
                <div class="uk-countdown-separator">:</div>
                <div class="uk-countdown-number uk-countdown-minutes"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
                <div class="uk-countdown-separator">:</div>
                <div class="uk-countdown-number uk-countdown-seconds"></div>
                <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
            </div>
            
            
        </div>
            </div>
            {/* <div className="theme">
                        <div className="theme-btn"><a href="/About">About</a></div>

                </div> */}
            </div>
            
    )
}

export default Countdown