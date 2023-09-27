import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appClass = darkMode ? "dark-mode" : "light-mode";
  document.body.className = appClass;

  return (
    <>
      <section className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div onClick={toggleDarkMode} className="dark-toggle">
          <FaMoon /> Dark mode
        </div>
      </section>
    </>
  );
};

export default Header;
