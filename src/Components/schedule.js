/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";



const Schedule = () => {
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(true);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        if(e.currentTarget.innerText === "EVENTS"){
            setIsActive1(true);
            setIsActive2(false);
            setIsActive3(false);
        }
        else if(e.currentTarget.innerText === "WORKSHOPS"){
            setIsActive1(false);
            setIsActive2(true);
            setIsActive3(false);
        }
        else if(e.currentTarget.innerText === "SHOWS"){
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(true);
        }
      };
    const handleClick2 = (e) => {
        e.preventDefault();
        if(e.currentTarget.id === "1"){
            setIsActive4(true);
            setIsActive5(false);
            setIsActive6(false);
            setIsActive7(false);
        }
        else if(e.currentTarget.id === "2"){
            setIsActive4(false);
            setIsActive5(true);
            setIsActive6(false);
            setIsActive7(false);
        }
        else if(e.currentTarget.id === "3"){
            setIsActive4(false);
            setIsActive5(false);
            setIsActive6(true);
            setIsActive7(false);
        }
        else if(e.currentTarget.id === "4"){
            setIsActive4(false);
            setIsActive5(false);
            setIsActive6(false);
            setIsActive7(true);
        }
      };
  function Card(props) {
    return (
      <div className="sched-card" id={props.id} onClick={handleClick2} style={props.style}>
        <h4>{props.day}</h4>
        <h3>{props.date}</h3>
        <h5>JANUARY</h5>
      </div>
    );
  }
  function Subhead(props) {
    return (
      <div className="subhead" onClick={handleClick} style={props.style}>
        <h1>{props.name}</h1>
      </div>
    );
  }
  function Table_Row(props) {
    return (
      <tr className="t-row">
        <td>{props.name}</td>
        <td>{props.venue}</td>
        {/* <td>{props.contact}</td> */}
      </tr>
    );
  }
  return (
    <section id="schedule">
      <center>
        <div className="login-signup sched-head">
          <h1>SCHEDULE</h1>
        </div>
      </center>
      <center>
        <div className="sched-dates">
          <Card date="26" day="Thursday" id="1" style={{
            backgroundColor:isActive4?'#571EB5':'',
            color:isActive4?'white':'',
            boxShadow:isActive4?'0px 0px 50px white':''
          }}/>
          <Card date="27" day="Friday" id="2" style={{
            backgroundColor:isActive5?'#571EB5':'',
            color:isActive5?'white':'',
            boxShadow:isActive5?'0px 0px 50px white':''
          }}/>
          <Card date="28" day="Saturday" id="3" style={{
            backgroundColor:isActive6?'#571EB5':'',
            color:isActive6?'white':'',
            boxShadow:isActive6?'0px 0px 50px white':''
          }}/>
          <Card date="29" day="Sunday" id="4" style={{
            backgroundColor:isActive7?'#571EB5':'',
            color:isActive7?'white':'',
            boxShadow:isActive7?'0px 0px 50px white':''
          }}/>
        </div>
        {isActive4?<div>
        <div className="subhead-div">
          <Subhead name="EVENTS" style={{
            backgroundColor:isActive1?'#571EB5':'',
            color:isActive1?'white':'',
            boxShadow:isActive1?'0px 0px 50px white':''
          }}/>
          <Subhead name="WORKSHOPS" style={{
            backgroundColor:isActive2?'#571EB5':'',
            color:isActive2?'white':'',
            boxShadow:isActive2?'0px 0px 50px white':''
          }}/>
          <Subhead name="SHOWS" style={{
            backgroundColor:isActive3?'#571EB5':'',
            color:isActive3?'white':'',
            boxShadow:isActive3?'0px 0px 50px white':''
          }}/>
        </div>
        { isActive1 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue and Time</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="Shaastra programming contest" venue="RJN 101 , 9:00 am-12:00 pm" contact="contact1" />
            <Table_Row name="Pharma Challenge" venue="RJN 102 , 10:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="RCX" venue="RJN 102 2:00 pm-5:30 pm" contact="contact1" />
            <Table_Row name="Finvent" venue="CRC 205 2:00 pm-5:00 pm" contact="contact1" />
            <Table_Row name="Shaastra Biz Quiz" venue="CRC 103 9:00 am-7:00 pm" contact="contact1" />
            <Table_Row name="JMT" venue="CRC 204 2:00 pm-5:00 pm" contact="contact1" />
            <Table_Row name="Ecomatrix" venue="CRC 202 2:00 pm-5:00 pm" contact="contact1" />
            <Table_Row name="Spotlight Lecture" venue="CLT 8:00 am-7:00 pm" contact="contact1" />
            <Table_Row name="Eleckart" venue="New IE lab 9:00 am-12:00 pm" contact="contact1" />
            <Table_Row name="Boeing Aeromodelling Contest" venue="Manohar C Watsa 8:00 am-5:00 pm" contact="contact1" />
            <Table_Row name="Debunk Fact Check" venue="Mahatma hall 9:00 am-5:00 pm" contact="contact1" />
            <Table_Row name="Robowars" venue="Outside OAT 9:00 am-4:00 pm" contact="contact1" />
            <Table_Row name="Envisage Show" venue="SAC 8:00 am-7:00 pm" contact="contact1" />
            <Table_Row name="Laser Tag" venue="HSB 133 8:00 am onwards" contact="contact1" />
            <Table_Row name="Silicon Valley" venue="online 2:00 pm-6:00 pm" contact="contact1" />
            <Table_Row name="TIF&JMT (capcity 40 , vip 2,podium)" venue=" Research Park 10:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="TIF&JMT (1. capcaity 40 , vip 2 )" venue=" Research Park 2:00 pm-5:00 pm" contact="contact1" />
            <Table_Row name="Summit Networking lunch" venue="TGH lawn 12:00 pm-2:00 pm" contact="contact1" />
            <Table_Row name="Wells Fargo Sponsor lecture (capacity 80 " venue="ICSR hall 3 2:00 pm-4:00 pm" contact="contact1" />
            <Table_Row name="Summit" venue="ESB seminar hall 9:00 am-5:00 pm" contact="contact1" />
            <Table_Row name="Summit" venue="CS15 9:00 am-5:00 pm" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="name21" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
          </table>
        </div> : null }
        { isActive3 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="No Shows" venue="" contact="contact3" />
          </table>
        </div> : null }
        </div>:null}
        {isActive5?<div>
        <div className="subhead-div">
          <Subhead name="EVENTS" style={{
            backgroundColor:isActive1?'#571EB5':'',
            color:isActive1?'white':'',
            boxShadow:isActive1?'0px 0px 50px white':''
          }}/>
          <Subhead name="WORKSHOPS" style={{
            backgroundColor:isActive2?'#571EB5':'',
            color:isActive2?'white':'',
            boxShadow:isActive2?'0px 0px 50px white':''
          }}/>
          <Subhead name="SHOWS" style={{
            backgroundColor:isActive3?'#571EB5':'',
            color:isActive3?'white':'',
            boxShadow:isActive3?'0px 0px 50px white':''
          }}/>
        </div>
        { isActive1 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue and Time</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="3 min thesis" venue="CRC 202 9:00 am-12:00 pm" contact="contact1" />
            <Table_Row name="Moot court" venue="CRC 205 9:30 am-12:30 pm" contact="contact1" />
            <Table_Row name="WF closing" venue="CRC 201 2:00 pm-4:00 pm" contact="contact1" />
            <Table_Row name="Wells fargo hackathon" venue="CRC 204 9:00 am-12:30 pm" contact="contact1" />
            <Table_Row name="Schlumberger Hackathon" venue="CRC 204 2:00 pm-5:30 pm" contact="contact1" />
            <Table_Row name="AT Mekathon" venue="CRC 205 3:00 pm-6:00 pm" contact="contact1" />
            <Table_Row name="JMT(capacity 80, 4 vip)" venue="CRC 301 10:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="Global Biotech Council" venue="RJN 101 10:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="Robo Oceana" venue="Inside OAT 11:00 am-6:00 pm" contact="contact1" />
            <Table_Row name="Boeing Aeromodelling Contest" venue="Manohar C Watsa 8:00 am-6:00 pm" contact="contact1" />
            <Table_Row name="Debunk Fact Check" venue="Mahatma Hall 9:00 am-5:00 pm" contact="contact1" />
            <Table_Row name="Soldering Challenge" venue="CEC 8:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="Weird Chess" venue="Sports Complex 2:00 pm-6:00 pm" contact="contact1" />
            <Table_Row name="ACDC" venue="Online 2:00 pm-5:00 pm" contact="contact1" />
            <Table_Row name="Laser Tag" venue="HSB 133 12:00 pm-7:00 pm" contact="contact1" />
            <Table_Row name="TIF&JMT(capacity 40,2 vip)" venue="Research Park 2:00 pm-6:00 pm" contact="contact1" />
            <Table_Row name="Summit" venue="CS15 9:00 am-6:00 pm" contact="contact1" />
            <Table_Row name="Summit Networking Lunch" venue="TGH Lawn 12:00 pm-2:00 pm" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="name22" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
          </table>
        </div> : null }
        { isActive3 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="Shaastra Nights" venue="SAC" contact="contact3" />
          </table>
        </div> : null }
        </div>:null}
        {isActive6?<div>
        <div className="subhead-div">
          <Subhead name="EVENTS" style={{
            backgroundColor:isActive1?'#571EB5':'',
            color:isActive1?'white':'',
            boxShadow:isActive1?'0px 0px 50px white':''
          }}/>
          <Subhead name="WORKSHOPS" style={{
            backgroundColor:isActive2?'#571EB5':'',
            color:isActive2?'white':'',
            boxShadow:isActive2?'0px 0px 50px white':''
          }}/>
          <Subhead name="SHOWS" style={{
            backgroundColor:isActive3?'#571EB5':'',
            color:isActive3?'white':'',
            boxShadow:isActive3?'0px 0px 50px white':''
          }}/>
        </div>
        { isActive1 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue and Time</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="Flipkart Grid Challenge" venue="SAC 9:00 am-6:00pm" contact="contact1" />
            <Table_Row name="M2P Hackathon" venue="CRC 301 2:00 pm-5:30pm" contact="contact1" />
            <Table_Row name="Playto-IIT National Robotics Competition" venue="CRC 103 10:00 am-4:00pm" contact="contact1" />
            <Table_Row name="Podium Awaits" venue="CRC 201 10:00 am-12:00pm" contact="contact1" />
            <Table_Row name="Launcher" venue="CRC 201 2:00 pm-5:00pm" contact="contact1" />
            <Table_Row name="Synthesis" venue="CRC 202 10:00 am-12:00pm" contact="contact1" />
            <Table_Row name="Oral Presentation" venue="CRC 204 1:00 pm-4:00pm" contact="contact1" />
            <Table_Row name="Opsium - Operations & Supply Chain Event" venue="CRC 205 4:00 pm-7:00pm" contact="contact1" />
            <Table_Row name="Graphical Abstract" venue="CRC 204 9:00 am-12:00pm" contact="contact1" />
            <Table_Row name="Chanakyaneeti" venue="CRC 205 2:00 pm-6:00pm" contact="contact1" />
            <Table_Row name="Biognosis Challenge" venue="RJN 101 10:00 am-1:00pm" contact="contact1" />
            <Table_Row name="Quantathon" venue="RJN 101 2:00 pm-4:30pm" contact="contact1" />
            <Table_Row name="CP Potpourri" venue="RJN 102 9:00 am-12:30pm" contact="contact1" />
            <Table_Row name="Design Challenge" venue="RJN 102 1:00 pm-7:00pm" contact="contact1" />
            <Table_Row name="Moot Court" venue="9:30 am-7:00pm" contact="contact1" />
            <Table_Row name="Debunk Fact Check" venue="Mahatma Hall 9:00 am-5:00 pm" contact="contact1" />
            <Table_Row name="AME" venue="Watsa 9:30 am-6:30pm" contact="contact1" />
            <Table_Row name="Shaastra Cube Open" venue="Sports Complex Yoga Hall 9:00 am-5:30pm" contact="contact1" />
            <Table_Row name="Micro Mouse Challenge" venue="Shaastra Street 11:00 am-1:00pm" contact="contact1" />
            <Table_Row name="MMM" venue="Shaastra Street 11:00 am-3:00pm" contact="contact1" />
            <Table_Row name="Vintage Camera Museum" venue="HSB 132 11:00 am-7:00pm" contact="contact1" />
            <Table_Row name="Laser Tag" venue="HSB 133 12:00 am-7:00pm" contact="contact1" />
            <Table_Row name="Summit" venue="CS15 9:00 am-6:00pm" contact="contact1" />
            <Table_Row name="KLA Sponsor Lecture" venue="ICSR Hall 3 6:00 pm-7:00pm" contact="contact1" />
            <Table_Row name="Summit" venue="TGH Lawn 12:00 pm-2:00pm" contact="contact1" />
            <Table_Row name="Summit" venue="IESB244 Seminar Hall 9:00 am onwards" contact="contact1" />
            <Table_Row name="JMT & TIF ( capacity  100, VIP 6 )" venue="BT seminar hall 10:00 am-5:30pm" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="name23" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
          </table>
        </div> : null }
        { isActive3 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="Shaastra Nights" venue="OAT" contact="contact3" />
            <Table_Row name="IDRL Night Racing" venue="Watsa" contact="contact3" />
          </table>
        </div> : null }
        </div>:null}
        {isActive7?<div>
        <div className="subhead-div">
          <Subhead name="EVENTS" style={{
            backgroundColor:isActive1?'#571EB5':'',
            color:isActive1?'white':'',
            boxShadow:isActive1?'0px 0px 50px white':''
          }}/>
          <Subhead name="WORKSHOPS" style={{
            backgroundColor:isActive2?'#571EB5':'',
            color:isActive2?'white':'',
            boxShadow:isActive2?'0px 0px 50px white':''
          }}/>
          <Subhead name="SHOWS" style={{
            backgroundColor:isActive3?'#571EB5':'',
            color:isActive3?'white':'',
            boxShadow:isActive3?'0px 0px 50px white':''
          }}/>
        </div>
        { isActive1 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue and Time</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="IDRL Night Racing" venue="Watsa 8:00 am onwards" contact="contact1" />
            <Table_Row name="E-Contest" venue="Online 10:00 am-12:30 pm" contact="contact1" />
            <Table_Row name="Fire and Ice" venue="Outside Oat 10:00 am-6:00 pm" contact="contact1" />
            <Table_Row name="Vintage Camera Museum" venue="HSB 132 11:00 am-7:00pm" contact="contact1" />
            <Table_Row name="History of photograph lecture and workshop on lighting" venue="RJN 201 11:00 am-12:30pm" contact="contact1" />
            <Table_Row name="Paper and Poster Presentation" venue="RJN 101 10:00 am-1:00pm" contact="contact1" />
            <Table_Row name="L & T Hackathon" venue="CRC 103 9:00 am-12:30pm" contact="contact1" />
            <Table_Row name="Laser Tag" venue="HSB 133 12:00 am-7:00pm" contact="contact1" />
            <Table_Row name="TIF&JMT(capacity 40,2 vip)" venue="Research Park 10:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="Moot Court" venue="ICSR Hall 1 10:00 am-1:00 pm" contact="contact1" />
            <Table_Row name="Moot Court" venue="ICSR Hall 1 2:00 pm-4:00 pm" contact="contact1" />
            <Table_Row name="Researchers Conference" venue="TTJ 8:00 am-5:00 pm" contact="contact1" />
            <Table_Row name="Researchers Conference" venue="TGH Lawn 12:00 pm-5:00 pm" contact="contact1" />
            <Table_Row name="SpotLight Lecture" venue="CLT 8:00 am-7:00 pm" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="name24" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
            <Table_Row name="name2" venue="venue2" contact="contact2" />
          </table>
        </div> : null }
        { isActive3 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              {/* <td>Contact</td> */}
            </tr>
            <Table_Row name="No Shows" venue="" contact="contact3" />
          </table>
        </div> : null }
        </div>:null}
        
        
      </center>
    </section>
  );
};

export default Schedule;
