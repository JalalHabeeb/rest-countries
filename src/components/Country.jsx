import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Country = () => {
  const [country, setCountry] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
    };
    fetchCountry();
  }, [name]);
  return (
    <>
      <Link to={"/"} className="btn link">
        <FaArrowLeftLong />
        Back
      </Link>
      <section className="country">
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            border,
          } = c;

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>

              <div className="country-details">
                <div>
                  <h2>{name}</h2>
                  <h5>Native Name: {nativeName}</h5>
                  <h5>Population: {population}</h5>
                  <h5>Region: {region}</h5>
                  <h5>Sub Region: {subregion}</h5>
                  <h5>Capital: {capital}</h5>
                </div>
                <div>
                  <h5>Top Level Domain: {topLevelDomain[0]}</h5>
                  <h5>Currencies: {currencies[0].code}</h5>
                  <h5>Languages {languages[0].name}</h5>
                </div>
              </div>
              <div>
                <h3>Border Countries: {border}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
