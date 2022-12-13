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
        <h4>MONDAY</h4>
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
        <td>{props.contact}</td>
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
          <Card date="22" id="1" style={{
            backgroundColor:isActive4?'#571EB5':'',
            color:isActive4?'white':'',
            boxShadow:isActive4?'0px 0px 50px white':''
          }}/>
          <Card date="23" id="2" style={{
            backgroundColor:isActive5?'#571EB5':'',
            color:isActive5?'white':'',
            boxShadow:isActive5?'0px 0px 50px white':''
          }}/>
          <Card date="24" id="3" style={{
            backgroundColor:isActive6?'#571EB5':'',
            color:isActive6?'white':'',
            boxShadow:isActive6?'0px 0px 50px white':''
          }}/>
          <Card date="25" id="4" style={{
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
              <td>Venue</td>
              <td>Contact</td>
            </tr>
            <Table_Row name="name11" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              <td>Contact</td>
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
              <td>Contact</td>
            </tr>
            <Table_Row name="name31" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
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
              <td>Venue</td>
              <td>Contact</td>
            </tr>
            <Table_Row name="name12" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              <td>Contact</td>
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
              <td>Contact</td>
            </tr>
            <Table_Row name="name32" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
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
              <td>Venue</td>
              <td>Contact</td>
            </tr>
            <Table_Row name="name13" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              <td>Contact</td>
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
              <td>Contact</td>
            </tr>
            <Table_Row name="name33" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
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
              <td>Venue</td>
              <td>Contact</td>
            </tr>
            <Table_Row name="name14" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
            <Table_Row name="name1" venue="venue1" contact="contact1" />
          </table>
        </div> : null }
        { isActive2 ? <div className="content-div">
          <table>
            <tr className="t-row-head">
              <td>Name</td>
              <td>Venue</td>
              <td>Contact</td>
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
              <td>Contact</td>
            </tr>
            <Table_Row name="name34" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
            <Table_Row name="name3" venue="venue3" contact="contact3" />
          </table>
        </div> : null }
        </div>:null}
        
        
      </center>
    </section>
  );
};

export default Schedule;
