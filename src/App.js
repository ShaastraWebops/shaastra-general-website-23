import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EditEvents from "./components/EditEvents";
import Edit from "./components/Edit";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<EditEvents />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  </Router>
);

export default App;
