import React from 'react';
import "../styles/spotlight.css"
import "../App.css";
import vetri from "../Images/Vetrimaaran.png";
import NavBar from './navigation/NavBar';
import Footer from './Footer';
import TopBar from './TopBar';
// import "../styles/ComingSoon.css"


// const Spotlight = () => {
//     return (
//         <div className='coming-body'>
//             <h2 className='headingComing'>Coming Soon</h2>
//         </div>
//     )
// }

const Spotlight = () => {
    return(
        <body>
            <NavBar/>
            {/* <TopBar/> */}
            <div className='spotlight'>
            <svg class="signup-heading">
              <text
                x="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                y="50%"
              >
                SPOTLIGHT
              </text>
            </svg>
            <div className='spotlight-about'>
              {" "}
              Spanning Science, Technology, Art, Entertainment & more, Spotlight
              is the flagship lecture series of Shaastra which brings
              visionaries from across the world, creating a unique platform for
              learning and interaction with pioneers who have transformed the
              world in remarkable ways. Spotlight stands for the convergence of
              brilliance, love of knowledge and the very spirit of engineering
              that Shaastra embodies.{" "}
            </div>
            <div className='spotlight-container'>
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src={vetri} alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Mr. Vetri Maaran</h2>
                                <h3>National Award winning Director <br />Producer and Writer</h3>
                                <h3>26/01/2023 4pm</h3>
                            </div>
                        </div>
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src="https://www.pragyan.org/20/home/gl_and_crossfire/rajagopala_chidambaram/rajagopala_chidambaram.jpg" alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Dr. Rajagopala Chidambaram</h2>
                                <h3>Padma Vibushan <br/> Former Principal Scientific Advisor<br/> to the Government of India </h3>
                                <h3>27/01/2023 10am</h3>
                            </div>
                        </div>
                    
                        <div className="spotlight-content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Montekahuwalia.jpg" alt="" />
                            <div className='spotlight-info'>
                                <h2>Dr. Montek Singh Ahluwalia</h2>
                                <h3>Former Deputy Chairman <br/> Planning Commission, Former Director of the <br/> Independent Evaluation Office at IMF</h3>
                                <h3>27/01/2023 12pm</h3>
                            </div>
                        </div>
                        
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src="https://pbs.twimg.com/profile_images/1473706332104663048/mYM4x-7Q_400x400.jpg" alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Mrs. Vineeta Singh</h2>
                                <h3>CEO, Sugar Cosmetics <br /> Judge at Shark Tank</h3>
                                <h3>27/01/2023 4pm</h3>
                            </div>
                        </div>
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src="https://media.news9live.com/h-upload/2022/07/11/465349-rnravitngovernor.webp"alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Thiru R. N.Ravi</h2>
                                <h3>Governor of Tamil Nadu</h3>
                                <h3>28/01/2023 11am</h3>
                            </div>
                        </div>
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dr_M._S._Valiathan.jpeg/220px-Dr_M._S._Valiathan.jpeg" alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Dr. M.S. Valiathan</h2>
                                <h3>Padma Vibhushan <br/> Eminent Cardiac Surgeon <br/> Inventor-Chitra Heart Valve</h3>
                                <h3>28/01/2023 2pm</h3>
                            </div>
                        </div>
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src="https://www.indianetzone.com/photos_gallery/65/12_Sivathanu_Pillai.jpg" alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Dr. A. Sivathanu Pillai</h2>
                                <h3>Padma Bhushan <br/>Founder-CEO of BrahMos Aerospace</h3>
                                <h3>28/01/2023 4pm</h3>
                            </div>
                        </div>
                        <div className="spotlight-content">
                            <div className='spotlight-img'>
                            <img src="https://nettv4u.com/imagine/23-05-2017/srinivas-mohan.png" alt="" />
                            </div>
                            <div className='spotlight-info'>
                                <h2>Mr. Srinivas Mohan</h2>
                                <h3>VFX Designer for RRR and Baahubali</h3>
                                <h3>29/01/2023 11am</h3>
                            </div>
                        </div>
                </div>
            </div>
            <Footer designed={[{ name: " JUANA ", mail: "mailto:ce21b065@smail.iitm.ac.in" }]}/>
        </body>
    )
}

export default Spotlight