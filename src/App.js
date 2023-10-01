import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Countries from "./components/Countries/Countries.jsx";
import Header from "./components/Header/Header.jsx";
// import Country from "./components/Country/Country.jsx";

const Countries = React.lazy(() =>
  import("./components/Countries/Countries.jsx")
);

const Country = React.lazy(() => import("./components/Country/Country.jsx"));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Countries />
            </Suspense>
          }
        />

        <Route
          path="/countries/:name"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Country />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
