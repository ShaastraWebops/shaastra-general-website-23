import React from 'react'
import img1 from "../Images/Outlook-signature_.png"
import wellsfargo from "../Images/wellsfargo.jpg";
import img2 from "../Images/SLBlight.png"
import img3 from "../Images/nomura_nobg.png"
import img6 from "../Images/Edufabrica_nobg.png"
import img7 from "../Images/Boeing_full_logo.svg.png"
import img8 from "../Images/GalaxEye.png"
import img9 from "../Images/Agnikul.png"
import img10 from "../Images/pvr.png"
import img14 from "../Images/BAJAJ_nobg.png"
import caterpillar from "../Images/cat white.-no-bg.png"
import img15 from "../Images/Juspay logo dark.png"
import img16 from "../Images/KLA_Logo_clr_r_rgb.png"
import img18 from "../Images/m-mouser-electronics-process-white.png"
import img35 from "../Images/CHETAK_nobg.png"
import airbus from "../Images/AIRBUS_White.png"
import img36 from "../Images/FTL_nobg.png"
import img37 from "../Images/BioconBiologics.png"
import img38 from "../Images/Flipkartlogo.png"
import img39 from "../Images/S_SLogo_nobg.png"
import img40 from "../Images/NPTELLogo.png"
import img41 from "../Images/IITM_BS_Degree_ Black_logo.png";
import img42 from "../Images/ArcesiumLogo.png"
import img43 from "../Images/Ansys white.png"
import img44 from "../Images/L&T.png"
import img45 from "../Images/Cubelelo Logo White .png";
import img46 from "../Images/LC_LOGO.png";
import img47 from "../Images/R2D2 logo.png";
import img48 from "../Images/topengineers.png";
import img49 from "../Images/dataleads.png";
import img50 from "../Images/EatSure Logo.png";
import img52 from "../Images/geekforgeeks.png";
import img53 from "../Images/Codechef logo.png";
import img54 from "../Images/fastrackwhite.png";
import img55 from "../Images/MONSTER.png";
import img56 from "../Images/unibic.png";
import img57 from "../Images/This_1-01.png";
import img58 from "../Images/Suryan_FM.png";
import img59 from "../Images/berado_logo_black.png";
import img60 from "../Images/GATSBY white.png";
import img61 from "../Images/DCX_Logo.png";
import img62 from "../Images/Q'sica.png";
import img63 from "../Images/dr aruns.png";
import img64 from "../Images/GrabOn Logo.png";
import img65 from "../Images/iris.png";
import img66 from "../Images/Treebo.png";
import img67 from "../Images/Times.1a73488a.jpg";
import img68 from "../Images/ACR_IITM.png";
import img69 from "../Images/frozen logo ai-02 (white).png";
import img70 from "../Images/stucred.png";
import img71 from "../Images/Neorah Logo Png.png";
import img72 from "../Images/Wedtree Logo purple.png";
import img73 from "../Images/V20_Cricket_Banner.png";
import img74 from "../Images/Abs-(illustrator).png";
import img75 from "../Images/FPJ Logo .png";
import img76 from "../Images/Chaos_Entertainment.png";
import img77 from "../Images/ak.png";

import "../styles/styles.css"
import NavBar from './navigation/NavBar'
import Footer from './Footer'

const Spons = () => {
    const cards = document.querySelectorAll('.cards');
    window.addEventListener("scroll", checkBoxes);

    function checkBoxes() {
        // e.window.scrollY;
        const triggerBottom = window.innerHeight / 6 * 5;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        })
    }

    window.onload = function () {
        var reloading = sessionStorage.getItem("reloading");
        if (reloading) {
            sessionStorage.removeItem("reloading");
            checkBoxes();
        }
    }


    // reloadP()
    return (
        <body>
            <NavBar />
            <div className='spons-body'>
                <div className='spons-intro'>
                    <h1 className='spons-heading'>Our Sponsors</h1>
                    <div className='spons-info'>Shaastra, ever since it's conception has been growing by leaps and bounds and this wouldn't have been achieved without the support of the student community and our corporate partners. We are continuously on the look out for long-term and mutually beneficial associations with reputed organizations from around the globe. In case your organization shares and believes in Shaastra’s vision, we would love to work out an association. We always welcome ideas, queries and criticism of any kind and hence, do feel free to contact us.</div>
                </div>
                {/* <div className="slider"> */}
                <section class="container-main">
                        <a href="https://m2pfintech.com/"> <div className="slide ">
                            <img src={img1} alt="" />
                            <h2 class="title">Title Sponsor</h2>
                        </div></a>
                        <a href="http://www.wellsfargojobs.com"><div className="slide">
                            <img src={wellsfargo} alt="" />
                            <h2 class="title">Platinum Sponsor</h2>
                        </div></a>
                        <a href="https://www.slb.com/"><div className="slide">
                            <img src={img2} alt="" />
                            <h2 class="title">Gold Sponsor</h2>
                        </div></a>
                        <a href="https://epaper.timesgroup.com/the-times-of-india/chennai">
                            <div className="slide">
                                <img src={img67} alt=""/>
                                <h2 className="title-1">Print Media Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.nomura.com/"><div className="slide">
                            <img src={img3} alt="" />
                            <h2 class="title">Co Sponsor</h2>
                        </div></a>
                        <a href="https://galaxeye.space/"> <div className="slide">
                            <img src={img8} alt="" />
                            <h2 className="title">Summit Title Sponsor</h2>
                        </div></a>
                        <a href="https://agnikul.in/#/"><div className="slide">
                            <img src={img9} alt="" />
                            <h2 className="title">Summit Title Sponsor</h2>
                        </div></a>
                        <a href="https://www.boeing.co.in"><div className="slide">
                            <img src={img7} alt="" />
                            <h2 className="title">Innovation Sponsor</h2>
                        </div></a>
                        <a href="https://lntedutech.com/"><div className="slide">
                                <img src={img44} alt="" />
                                <h2 class="title">IDP Sponsor</h2>
                        </div></a>
                        <a href="https://www.arcesium.com/"><div className="slide">
                            <img src={img42} alt="" />
                            <h2 class="title">Technology Sponsor</h2>
                        </div></a>
                        <a href="https://dataleads.co.in/"><div className="slide">
                            <img src={img49} alt="" />
                            <h2 class="title">Debunkathon Sponsor</h2>
                        </div></a>
                        <a href="https://www.edufabrica.net/">
                            <div className="slide ">
                                <img src={img6} alt="" />
                                <h2 className="title">Biology Workshop Sponsor</h2>
                            </div>
                        </a>
                    </section>

                {/* </div> */}
                <div className='spons-events'>Events Sponsors</div>
                <div className="slider">
                {/* <div className='slide-track'> */}
                <a href="https://www.bajajauto.com/"><div class="cards-events">
                        <img src={img14} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>

                    <a href="https://www.bajajauto.com/"><div class="cards-events">
                        <img src={img35} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="http://www.caterpillar.com/"><div class="cards-events">
                        <img src={caterpillar} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://www.kla.com/"><div class="cards-events">
                        <img src={img16} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://www.airbus.com/en/"><div class="cards-events">
                        <img src={airbus} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://juspay.in/"><div class="cards-events">
                        <img src={img15} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>
                    <a href="https://www.flipkart.com/"><div class="cards-events">
                        <img src={img38} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://www.mouser.in/">
                        <div class="cards-events">
                            <img src={img18} alt="" className='imp-spons1' />
                            {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                        </div>
                    </a>
                    <a href="https://flowthermolab.com/"><div class="cards-events">
                        <img src={img36} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Co Sponsors</h2> */}
                    </div></a>

                    <a href="http://www.bioconbiologics.com/"><div class="cards-events">
                        <img src={img37} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://suranaandsurana.com/"><div class="cards-events">
                        <img src={img39} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://nptel.ac.in/"><div class="cards-events">
                        <img src={img40} alt="" className='imp-spons1' />
                        {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                    </div></a>
                    <a href="https://onlinedegree.iitm.ac.in/">
                        <div class="cards-events">
                            <img src={img41} alt="" className='imp-spons1' />
                            {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                        </div>
                    </a>
                    <a href="https://www.cubelelo.com/">
                        <div class="cards-events">
                            <img src={img45} alt="" className='imp-spons1' />
                            {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                        </div>
                    </a>
                    <a href="https://www.lioncircuits.com/">
                        <div class="cards-events">
                            <img src={img46} alt="" className='imp-spons1' />
                            {/* <h2 class="title-1">Prize Money Sponsor</h2> */}
                        </div>
                    </a>
                {/* </div> */}
                </div>
                <div className="slider1" >
                    {/* <div className='slide-track1'> */}
                    <a href="https://acr.iitm.ac.in/"><div class="cards-events1">
                        <img src={img68} alt="" className='imp-spons1' />
                        <h2 class="title-1">Prize Money Sponsor</h2>
                    </div></a>
                        <a href="https://www.ansys.com/en-in">
                            <div className="cards-events1">
                                <img src={img43} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Industry Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://instagram.com/pvrcinemas_official?igshid=YmMyMTA2M2Y=">
                            <div className="cards-events1">
                                <img src={img10} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Movie Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://r2d2.iitm.ac.in">
                            <div className="cards-events1">
                                <img src={img47} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Makeathon Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/frozen_bottle/">
                            <div className="cards-events1">
                                <img src={img69} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Refreshment Partner</h2>
                            </div>
                        </a>
                        <a href="http://www.topengineersindia.com">
                            <div className="cards-events1">
                                <img src={img48} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Workshop Sponsor</h2>
                            </div>
                        </a>
                        <a href="./">
                            <div className="cards-events1">
                                <img src={img77} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Health Partner</h2>
                            </div>
                        </a>
                        <a href="https://www.eatsure.com/">
                            <div className="cards-events1">
                                <img src={img50} alt="" className='imp-spons1'/>
                                <h2 className="title-1">Cloud Kitchen Partner</h2>
                            </div>
                        </a>
                        {/* 5 slides doubled up for the infinite loop */}
                        {/* <a href="https://www.ansys.com/en-in">
                            <div className="slide1">
                            <img src={img43} alt="" />
                            <h2 className="title-1">Industry Sponsor</h2>
                            </div>
                            </a>
                            <a href="https://instagram.com/pvrcinemas_official?igshid=YmMyMTA2M2Y=">
                            <div className="slide1">
                            <img src={img10} alt="" />
                            <h2 className="title-1">Movie Sponsor</h2>
                            </div>
                        </a> */}
                    {/* </div> */}

                </div>
                <div className='spons-events' style={{fontSize:"30px"}}>Kind Sponsors</div>
                <div className="slider">
                        <a href="https://www.fastrack.in/shop/perfumes?cm_sp=headerl2-_-watches-_-viewallbar&utm_source=fest&utm_medium=fest&utm_campaign=fastrackperfumesbrandcampaign2022">
                            <div className="cards-events1">
                                <img src={img54} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Perfume Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.monsterenergy.com/">
                            <div className="cards-events1">
                                <img src={img55} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Energy Drink Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://unibicfoods.com/">
                            <div className="cards-events1">
                                <img src={img56} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Snack Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://shop.continental.coffee/collections/premix">
                            <div className="cards-events1">
                                <img src={img57} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Coffee Partner</h2>
                            </div>
                        </a>
                        <a href="https://www.suryanfm.in/">
                            <div className="cards-events1">
                                <img src={img58} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Radio Partner</h2>
                            </div>
                        </a>
                        <a href="https://beardo.in/">
                            <div className="cards-events1">
                                <img src={img59} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Grooming partner</h2>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/gatsbyindia/">
                            <div className="cards-events1">
                                <img src={img60} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Styling Partner</h2>
                            </div>
                        </a>
                        <a href="https://www.dcx3d.com/">
                            <div className="cards-events1">
                                <img src={img61} alt="" className='imp-spons1'/>
                                <h2 className="title-2">3D printing Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://qsica.in/">
                            <div className="cards-events1">
                                <img src={img62} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Glow Sponsor</h2>
                            </div>
                        </a>
                        <a href="./">
                            <div className="cards-events1">
                                <img src={img63} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Vintage exhibits Partnerr</h2>
                            </div>
                        </a>
                        <a href="https://shaastra.grabon.in/">
                            <div className="cards-events1">
                                <img src={img64} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Savings Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.irishomefragrances.com/">
                            <div className="cards-events1">
                                <img src={img65} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Fragrance Sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.treebo.com/">
                            <div className="cards-events1">
                                <img src={img66} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Accomadation Partner</h2>
                            </div>
                        </a>
                        <a href="http://www.virtilens.com/">
                            <div className="cards-events1">
                                <img src={img73} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Street Sponsor</h2>
                            </div>
                        </a>
                            <a href="https://www.codechef.com/">
                                <div className="cards-events1">
                                    <img src={img53} alt="" className='imp-spons1'/>
                                    <h2 className="title-2">Platform Sponsor</h2>
                                </div>
                            </a>
                            <a href="https://www.absolutebarbecues.com/reservations/?utm_source=iit&utm_medium=Conversions&utm_campaign=iitmadrass&utm_id=brand&utm_term=bookings&utm_content=complete">
                            <div className="cards-events1">
                                <img src={img74} alt="" className='imp-spons1'/>
                                <h2 className="title-2">BBQ Sponsor</h2>
                            </div>
                        </a>
                            <a href="http://geeksforgeeks.com/">
                                <div className="cards-events1">
                                    <img src={img52} alt="" className='imp-spons1'/>
                                    <h2 className="title-2">Coding Sponsor</h2>
                                </div>
                            </a>
                            <a href="https://www.wedtree.com/">
                                <div className="cards-events1">
                                    <img src={img72} alt="" className='imp-spons1'/>
                                    <h2 className="title-2">Gifting Sponsor</h2>
                                </div>
                            </a>
                            <a href="https://www.freepressjournal.in/">
                                <div className="cards-events1">
                                    <img src={img75} alt="" className='imp-spons1'/>
                                    <h2 className="title-2">Outreach Partner</h2>
                                </div>
                            </a>
                        <a href="https://atelierneorah.com/">
                            <div className="cards-events1">
                                <img src={img71} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Journaling sponsor</h2>
                            </div>
                        </a>
                        <a href="https://www.stucred.com/">
                            <div className="cards-events1">
                                <img src={img70} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Student Credit Partner</h2>
                            </div>
                        </a>
                        <a href="https://www.chaosgaming.co.in/">
                            <div className="cards-events1">
                                <img src={img76} alt="" className='imp-spons1'/>
                                <h2 className="title-2">Entertainment Partner</h2>
                            </div>
                        </a>

                </div>
                
                {/* <div className='spons-extra'>
                <div className="cards">
                    <img src={img6} alt="" className='imp-spons' />
                    <h2 className="title-1">Technology Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img7} alt="" className='imp-spons' />
                    <h2 className="title-1">Co Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img8} alt="" className='imp-spons' />
                    <h2 className="title-1">Co Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img9} alt="" className='imp-spons' />
                    <h2 className="title-1">Co Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img10} alt="" className='imp-spons' />
                    <h2 className="title-1">IDP Sponsor</h2>
                </div>
                <div className="cards">
                    <img src={img11} alt="" className='imp-spons' />
                    <h2 className="title-1">Prize Money Sponsor</h2>
                </div>
            </div> */}
                {/* <section class="container-main">
                    <div class="cards-events">
                        <img src={img12} alt="" className='imp-spons1' />
                        <h2 class="title-1">Juniors Sponsor</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img19} alt="" className='imp-spons1' />
                        <h2 class="title-1">Campus Ambassador Sponsors</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img20} alt="" className='imp-spons1' />
                        <h2 class="title-1">Campus Ambassador Sponsors</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img21} alt="" className='imp-sales' />
                        <h2 class="title-1">Shows Sponsors</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img22} alt="" className='imp-o' />
                        <h2 class="title-1">Workshop Sponsor</h2>
                    </div>
                    <div class="cards-events">
                        <img src={img23} alt="" className='imp-spons1' />
                        <h2 class="title-1">Workshop Sponsor</h2>
                    </div>

                </section> */}
                {/* <div className='spons-events'>Other Sponsor</div> */}
                {/* <div class="container-main">
                    <div class="cards-events1">
                        <img src={img24} alt="" className='imp-spons2' />
                        <h2 class="title-1">Beverage Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img25} alt="" className='imp-spons2' />
                        <h2 class="title-1">Confectionery Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img26} alt="" className='imp-spons2' />
                        <h2 class="title-1">
                            Savings Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img27} alt="" className='imp-spons2' />
                        <h2 class="title-1">Chess Platform Sponsors</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img34} alt="" className='imp-spons2' />
                        <h2 class="title-1">Eatery Sponsor</h2>
                    </div>
                </div> */}
                {/* <div className="container-main">
                    <div class="cards-events1">
                        <img src={img28} alt="" className='imp-spons2' />
                        <h2 class="title-1">Grooming Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img29} alt="" className='imp-spons2' />
                        <h2 class="title-1">Desert Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img30} alt="" className='imp-spons2' />
                        <h2 class="title-1">Snack Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img31} alt="" className='imp-spons2' />
                        <h2 class="title-1">Industry Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img32} alt="" className='imp-spons2' />
                        <h2 class="title-1">Nutrition Sponsor</h2>
                    </div>
                    <div class="cards-events1">
                        <img src={img33} alt="" className='imp-spons2' />
                        <h2 class="title-1">Gifting Sponsor</h2>
                    </div>
                </div> */}

            </div>
            <Footer designed={[{ name: " Akshay ", mail: "mailto:ce21b006@smail.iitm.ac.in" }]} />
        </body>
    )
}

export default Spons