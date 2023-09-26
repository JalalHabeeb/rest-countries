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
    </>
  );
};

export default Country;
