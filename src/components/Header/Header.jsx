import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <section className="header" data-testid="header">
        <Link to={"/"} className="link">
          <h1>Where in the world?</h1>
        </Link>
        <div onClick={toggleDarkMode} className="dark-toggle">
          <FaMoon /> Dark mode
        </div>
      </section>
    </>
  );
};

export default Header;
