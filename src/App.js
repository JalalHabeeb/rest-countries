import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { Grid } from "react-loader-spinner";

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
            <Suspense
              fallback={
                <Grid
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{
                    display: "flex",
                    "justify-content": "center",
                    "margin-top": "20%",
                  }}
                  wrapperClass=""
                  visible={true}
                />
              }
            >
              <Countries />
            </Suspense>
          }
        />

        <Route
          path="/countries/:name"
          element={
            <Suspense
              fallback={
                <Grid
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{
                    display: "flex",
                    "justify-content": "center",
                    "margin-top": "20%",
                  }}
                  wrapperClass=""
                  visible={true}
                />
              }
            >
              <Country />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
