import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}

export default App;
