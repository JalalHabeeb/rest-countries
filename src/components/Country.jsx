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
      console.log(country);
    };
    fetchCountry();
  }, [name]);
  return (
    <>
      <section className="country">
        <Link to={"/"} className="btn link">
          <FaArrowLeftLong />
          <span>Back</span>
        </Link>
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
            borders,
          } = c;

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>

              <div className="country-details">
                <div>
                  <h2>{name}</h2>
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                </div>
                <div>
                  <h5>
                    Top Level Domain: <span>{topLevelDomain[0]}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies[0].code}</span>
                  </h5>
                  <h5>
                    Languages: <span>{languages[0].name}</span>
                  </h5>
                </div>
              </div>
              <div>
                <h3>Border Countries:</h3>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul>
                        <li key={border}>{border}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;