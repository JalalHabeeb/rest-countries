import React from "react";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <section className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <FaMoon /> Dark mode
        </div>
      </section>
    </>
  );
};

export default Header;
