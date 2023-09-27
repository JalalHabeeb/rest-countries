import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Filter = ({ onRegionChange }) => {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);

    const filtered = countries.filter(
      (country) =>
        country.name &&
        typeof country.name === "string" &&
        country.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onRegionChange(region);

    setSearchInput("");
    setFilteredCountries([]);
  };

  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for country"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <div className="search-results">
          {filteredCountries.length > 0 && (
            <ul>
              {filteredCountries.map((country) => (
                <li key={country.numericCode}>
                  <Link
                    to={`/countries/${country.name}`}
                    className="search-link"
                  >
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      <div className="region-filter">
        <select
          name="select"
          id="select"
          className="select"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
