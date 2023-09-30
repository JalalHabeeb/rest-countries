import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
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
      <section className="grid" data-testid="countries-section">
        {filteredCountries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <Link to={`/countries/${name}`} key={numericCode} className="link">
              <div className="flag-img">
                <img src={flag} alt={name} />
              </div>
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
