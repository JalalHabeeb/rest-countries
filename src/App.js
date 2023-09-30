import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/Countries.jsx";
import Header from "./components/Header/Header.jsx";
import Country from "./components/Country/Country.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
