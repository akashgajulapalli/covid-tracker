import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./countryDetails.css";

const CountryDetails = (props) => {
    const {countryCode, totalCases, newCases, totalDeaths, newDeaths, totalRecovered, newRecovered } = props;
  return (
    <div className="countryDetails">
      <div className="country-icon">
        <ReactCountryFlag
          className="country-flag"
          countryCode={countryCode}
          svg
          style={{
            width: "3.5em",
            height: "3.5em",
          }}
          title={countryCode}
        />
      </div>
      <div className="cases-details">
        <div className="cases-box Cases">
          <a href="#">{totalCases}</a>
          <p className="yesterday">
            Last 24 Hours:<strong>{newCases}</strong>
          </p>
        </div>

        <div className="cases-box Deaths">
          <a href="#">{totalDeaths}</a>
          <p className="yesterday">
            Last 24 Hours:<strong>{newDeaths}</strong>
          </p>
        </div>

        <div className="cases-box Recovered">
          <a href="#">{totalRecovered}</a>
          <p className="yesterday">
            Last 24 Hours:<strong>{newRecovered}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
