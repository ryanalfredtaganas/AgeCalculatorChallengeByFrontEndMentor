import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [resultYears, setResultYears] = useState(0);
  const [resultMonths, setResultMonths] = useState(0);
  const [resultDays, setResultDays] = useState(0);
  const currentYear = new Date().getFullYear();
  const [validation, setValidation] = useState(false);
  const [border, setBorder] = useState(false);
  const calculateAge = () => {
    const today = new Date();
    const inputDate = new Date(`${month}/${day}/${year}`);

    if (
      (day == isNaN(day), day > 31) ||
      (month == isNaN(month), month > 12) ||
      (year == isNaN(year), year > currentYear) ||
      inputDate > today
    ) {
      setBorder(true);
      setValidation(true);
      return;
    } else {
      setValidation(false);
      setBorder(false);
    }

    const diffTime = Math.abs(today - inputDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.floor((diffDays % 365) / 30);
    const remainingDays = Math.floor((diffDays % 365) % 30);

    setResultYears(diffYears);
    setResultMonths(diffMonths);
    setResultDays(remainingDays);
  };

  return (
    <div className="container container-1 d-flex justify-content-center align-items-center">
      <div className="age-calculator-body justfy-content-center align-items-center">
        <div className="container">
          <div className="container-fluid mobile-center">
            <div className="row date-input ">
              <div className="col nopadding">
                <h1 className="text-label">DAY</h1>
                <input
                  style={{
                    border: !border ? "2px solid #cecece" : "2px solid red",
                  }}
                  type="text"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="DD"
                  className="text-box"
                />
                {validation && (
                  <h6 style={{ visibility: "visible" }}>Must be a valid day</h6>
                )}
              </div>
              <div className="col nopadding">
                <h1 className="text-label">MONTH</h1>
                <input
                  style={{
                    border: !border ? "2px solid #cecece" : "2px solid red",
                  }}
                  type="text"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                  className="text-box"
                />
                {validation && (
                  <h6 style={{ visibility: "visible" }}>
                    Must be a valid month
                  </h6>
                )}{" "}
              </div>
              <div className="col nopadding">
                <h1 className="text-label">YEAR</h1>
                <input
                  style={{
                    border: !border ? "2px solid #cecece" : "2px solid red",
                  }}
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YYYY"
                  className="text-box"
                />
                {validation && (
                  <h6 style={{ visibility: "visible" }}>Must be in the past</h6>
                )}{" "}
              </div>
            </div>
          </div>

          <div className="container-fluid divider justify-content-center align-items-center  d-flex w-100">
            <hr></hr>
            <img
              onClick={calculateAge}
              className="arrow"
              src="//assets/icon-arrow.svg"
              alt=""
              srcset=""
            />
          </div>

          <div className="container pt-n5">
            <div className="result">
              <span>{resultYears ? resultYears : "--"}</span> years
            </div>
            <div className="result">
              <span>{resultMonths ? resultMonths : "--"}</span> months
            </div>
            <div className="result">
              <span>{resultDays ? resultDays : "--"}</span> days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
