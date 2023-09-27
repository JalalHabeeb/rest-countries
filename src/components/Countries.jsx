import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);

    if (region) {
      const filtered = countries.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  };

  return (
    <>
      <Filter onRegionChange={handleRegionChange} />
      <section className="grid">
        {filteredCountries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <Link to={`/countries/${name}`} key={numericCode} className="link">
              <img src={flag} alt={name} />
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
