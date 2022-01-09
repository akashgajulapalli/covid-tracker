import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import WorldStats from "../WorldStats/worldStats";
import "./global.css";
import { getData } from "../utils/util";

const Global = () => {
  const [result, setResult] = useState({
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
    NewConfirmed: 0,
  });
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getData().then((response) => {
      const { TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed } =
        response?.Global;
      const obj = {
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        NewConfirmed,
      };
      setResult(obj);
    });
  };

  return (
    <div className="Global">
      <h1 className="heading">Covid-19 Tracker</h1>
      <p className="description">Let's check information about Covid-19</p>
      <div className="world-stats">
        {Object.keys(result).length > 0
          ? Object.keys(result).map((item, index) => {
              return (
                <WorldStats
                  key={index}
                  about={item}
                  total={
                    <NumberFormat
                      value={result[item]}
                      thousandSeparator={true}
                      displayType="text"
                    />
                  }
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Global;
