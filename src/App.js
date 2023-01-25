import Login from "./Components/login";
import Signup from "./Components/signup";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Verify from "./Components/Verify";
import Admin from "./Components/Admin";
import EditUser from "./Components/EditUser";
import AddEvent from "./Components/AddEvent";
import EditEvent from "./Components/EditEvent";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PayRegister from "./Components/payRegister";
import Exhibition from "./Components/Exhibition";
import Envisage from "./Components/Envisage";
import TIF from "./Components/TIF";
import Profile from "./Components/Profile";
import Events from "./Components/EventsLanding";
import EventsLanding from "./Components/EventsLanding";
import WorkshopsLanding from "./Components/WorkshopsLanding";
import Team from "./Components/pages/Team_page/Team.tsx";
import Spons from "./Components/Spons";
import Privacy from "./Components/policies/Privacy";
import Refund from "./Components/policies/Refund";
import Shipping from "./Components/policies/Shipping";
import Terms from "./Components/policies/TermsConditions";
import Vastra from "./Components/vastra";
import Homepage from "./Components/Homepage";
import ProfileEdit from "./Components/ProfileEdit";
import Workshop from "./Components/Workshop";
import Debunk from "./Components/debunk"
import Temp from "./Components/tempHome";

import Contact from "./Contact";
import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';

import { Modal2 } from "./Components/Modal2";
import { Container, ButtonModal } from "./Components/modalContainer";
import Spotlight from "./Components/Spotlight";
import Shows from "./Components/Shows";
import Faq from "./Components/faq"

const TRACKING_ID = "UA-42581770-14";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/edit" element={<ProfileEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/envisage" element={<Envisage />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/tif" element={<TIF />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<EventsLanding />} />
          <Route path="/workshops" element={<WorkshopsLanding />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Spons />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/debunk" element={<Debunk />} />
          <Route
            path="/forgotpassword/resetpassword"
            element={<ResetPassword />}
          />
          <Route path="/admin/workshops" element={<Workshop />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/policies/Privacy" element={<Privacy />} />
          <Route path="/policies/Shipping" element={<Shipping />} />
          <Route path="/policies/Terms" element={<Terms />} />
          <Route path="/policies/Refund" element={<Refund />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/pay/:id" element={<PayRegister />} /> */}
          <Route path="/admin/addevent" element={<AddEvent />} />
          <Route path="/admin/edit/:id" element={<EditEvent />} />
          <Route path="/socialendeavours" element={<Vastra />} />
          <Route path="/blitzchess" element={<ChessBlitz />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
