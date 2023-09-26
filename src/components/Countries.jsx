import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <Filter />
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <Link to={`/countries/${name}`} key={numericCode} className="link">
              <img src={flag} alt="name" />
              <div className="details">
                <h3>{name}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
