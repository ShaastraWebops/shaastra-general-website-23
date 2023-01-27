import '../App.css';
import Logo from './Logo';
import Square from './Square';
import '../styles.css';
import React, { useState, useEffect } from 'react';
import Circle from './Circles';
import Events from './Events'
import Speakers from './Speakers'
import BlackScreen from './BlackScreen';
import Spiral from './Spiral';
import Countdown from './Countdownpage';
import About from './About';
import Theme from './Theme';
import Footer from './Footerfirst'
import NavBar from './navigation/NavBar.js'
import TopBar from './TopBar'

import { Modal2 } from "./Modal2";
import { Container, ButtonModal } from "./modalContainer";


function PassportDiv() {
  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial"
  };

  const divstyle ={
    alignItems: "center",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    marginInline: "4rem",
    padding: "1.2rem",
    paddingInline: "1.5rem",
    borderRadius:"10px",
    background: "linear-gradient(224.52deg, #0B0454 1.63%, #7E10B3 70.6%, rgba(130, 16, 176, 0.88) 90.31%, rgba(162, 17, 156, 0.82) 101.2%)"
  };

  const liststyle ={
    
    alignItems: "center",
    border: "1.5px solid #fff",
    borderRadius: "10px",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    marginInline: "4rem",
    padding: "1.2rem",
    paddingInline: "1.5rem",
    listStyle:"none"
  }
  const passinfo ={
    color: "white",
    backgroundColor: "",
    animation: "glitch 2s ease infinite",
    fontSize:"30px"
}
  return (
    <div><span style={divstyle}><span style={passinfo}>With a<b style = {mystyle}>Shaastra Passport</b>, gain complete access to all of Shaastra's:</span><ul style={liststyle}><li style={mystyle}>➡️ On-spot competitions</li><li style ={mystyle}>➡️ Night shows</li><li style = {mystyle}>➡️ Workshops</li><li style ={mystyle}>➡️ Spotlight lecture series</li><li style = {mystyle}>➡️ Research conference on AI, ML ,DS</li><li style = {mystyle}>➡️ Industrial talks</li><li style = {mystyle}>➡️ Exhibitions</li><li style = {mystyle}>➡️ Games, tech-entertainment, fun, frolic, and much more! Only at the lush green IITM campus</li></ul></span></div>
  );
}

const Homepage=()=> {
  
  const [cpCount, setCpCount]=useState(1);
  // const [checkPoint, setCheckPoint]=useState([0,7480,14480,21480,30580,37480,44480]);
  // const [checkPoint, setCheckPoint]=useState([0,2380,4980,6980,8980,9980]);
  const [checkPoint, setCheckPoint]=useState([0,2380,4980,6980,8980, 10000]);
  const [depth, setDepth]=useState(checkPoint[cpCount]);
  const [envStyle, setEnvStyle]=useState({

    height: '100vh',
    width: '100vw',
    transition: '5s',
    transformStyle: 'preserve-3d',
    transform: 'translateZ('+checkPoint[cpCount]+')',
    
 });
 

 
 


   const handleNavigationForward = (e) => {
     
    
    if (cpCount<=7 && cpCount>-1)
    {
          setCpCount(cpCount+1);
          console.log(cpCount);

          setEnvStyle({

            height: '100vh',
            width: '100vw',
            transition: '3s',
            transformStyle: 'preserve-3d',
            transform: 'translateZ('+checkPoint[cpCount]+'px)',
            
          });
    }
  };

  const handleNavigationBackward = (e) => {
    if (cpCount > -1 && cpCount <= 7) {
      setCpCount(cpCount - 1);
      console.log(cpCount);

      setEnvStyle({
        height: "100vh",
        width: "100vw",
        transition: "3s",
        transformStyle: "preserve-3d",
        transform: "translateZ(" + checkPoint[cpCount] + "px)",
      });
    }
  };
  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const divvstyle ={
    top: "-2%",
    left: "10%",
    transform: "translate(0%, 60%)",
    borderRadius: "5px",
    background: "linear-gradient(224.52deg, #0B0454 1.63%, #7E10B3 70.6%, rgba(130, 16, 176, 0.88) 90.31%, rgba(162, 17, 156, 0.82) 101.2%)",   
    position: "fixed",
    fontSize:"17px",
    color:"white",
    zIndex:"100000000",
    padding: "15px 10px"
  }
  return (
    <div className="App home">
      <TopBar />
      <NavBar />
      
      <ButtonModal onClick={openModal2}>Merch</ButtonModal>
      <Container>
        <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
      </Container>
      <div style={{"display": "flex", "flexDirection": "row", "width": "fit-content"}}>
      <div>
      <a href="https://sales.shaastra.org"><div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={divvstyle} className="mobdivPop">
          Passport
        </div></a>
        {isHovering && <PassportDiv />}
      </div>
      <div className='text-phrase' onClick={()=>window.open("./Workshops")}>
            <h3>Enroll for workshops now!</h3>
          </div>
    </div>
      <div className='uni'>
          
          <div className='control-btns'>
          <div className='forward-btn' onClick={(e)=>handleNavigationForward(e)}></div>
          <div className='back-btn' onClick={(e)=>handleNavigationBackward(e)}>back</div>
          </div>
          {/* <div className='text-phrase' onClick={()=>window.open("./Workshops")}>
            <h3>Enroll for workshops now!</h3>
          </div> */}
          <div className='acco-phrase' onClick={()=>window.open("https://hospitality.shaastra.org/")}>
            <h3>Accomodation</h3>
          </div>
          {/* <div className='tap-phrase' >
            Tap to see more!
          </div> */}
        <div className='env' style={envStyle} >
        
          
          {/* <Logo pos={0}/> */}

          <Spiral colour={"#ff0579"} colour2={"#fee"} pos={0} />

          {/* <Circle colour={'#fee'} colour2={'#fee'} pos={0}/> */}



          {/* <Theme pos={-7500}/> */}
          {/* <Theme pos={-1290}/> */}
          
          <Theme pos={-2400}/>
          {/* <Spiral colour={'#ff0579'} colour2={'#fee'} pos={-500} /> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-500}/> */}


          {/* <Circle colour={'#fee'} colour2={'#fee'} pos={-9750}/> */}

          {/* <Countdown pos={-14500}/> */}
          {/* <Countdown pos={-8290}/> */}
          {/* <Countdown pos={-930}/> */}
          <Countdown pos={-5000}/>
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-17000}/> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-2000}/> */}
          {/* <About pos={-21500}/> */}
          <About pos={-7000}/>

          {/* <Spiral colour={'#ff0579'} colour2={'#fee'} pos={-23000} /> */}
          {/* <Circle colour={'#fee'} colour2={'#fee'} pos={-5000}/> */}

          {/* <Speakers pos={-30600}/> */}
          {/* <Speakers pos={-21290}/> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-5000}/> */}


          <Speakers pos={-9000}/>
          {/* <Events pos={-9000}/> */}
          
          {/* <Events pos={-37500}/> */}
          {/* <Events pos={-28190}/> */}
          {/* <Square colour={'#fee'} colour2={'#fee'} pos={-7000}/> */}


          <Events pos={-10000}/>

          {/* <Footer pos={-44500}/> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
