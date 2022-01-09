import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import HeadingNames from "../HeadingNames/headingNames";
import "./countries.css";
import { getData } from "../utils/util";
import CountryDetails from "../CountryDetails/countryDetails";

const Countries = () => {
  const [countryDetails, setCountryDetails] = useState([]);
  const[countryListDefault, setCountryListDefault] = useState([]);
  const[input,setInput] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getData().then((response) => {
      setCountryDetails( response?.Countries || []);
      setCountryListDefault(response?.Countries); 
    });
  };

  const handleChange1 = (e) => {
    const value = e.target.value;
    let tempArray = [...countryDetails];
    tempArray.sort((a, b) => {
      return value === "Highest"
        ? b.TotalConfirmed - a.TotalConfirmed
        : a.TotalConfirmed - b.TotalConfirmed;
    });
    setCountryDetails(tempArray);
  };
  const filterCountries = (e) => {
    let value = e.target.value;
    const filteredArray = countryListDefault.filter((item) => item.Country.toLowerCase().includes(value));
    setInput(value)
    setCountryDetails(filteredArray);
  };

  return (
    <div className="countries-stats">
      <h2 className="countries-stats-heading">Countries Stats</h2>
      <div className="Filtering">
        <input
          type="text"
          value={input}
          placeholder="Enter Country Name"
          onChange={filterCountries}
        />
        <select className="sort-by" onChange={handleChange1}>
          <option>Highest</option>
          <option>Lowest</option>
        </select>
      </div>
      <HeadingNames />
      {countryDetails.length > 0
        ? countryDetails.map((item, index) => {
            return (
              <CountryDetails
                key={index}
                countryCode={item.CountryCode}
                totalCases={item.TotalConfirmed}
                newCases={item.NewConfirmed}
                totalDeaths={item.TotalDeaths}
                newDeaths={item.NewDeaths}
                totalRecovered={item.TotaRecovered}
                newRecovered={item.newRecovered}
              />
            );
          })
        : null}
    </div>
  );
};

export default Countries;
