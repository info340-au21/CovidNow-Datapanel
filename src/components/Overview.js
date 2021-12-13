import React from "react";
import Map from "./Map";
import { useState } from "react";

export function Overview(props) {
  let usData = props.usData;

//   let date = "2021-12-11";
  let date = usData.lastUpdatedDate;
  let lastUpdatedDate = usData.lastUpdatedDate;

  return (
      <div className="overview">
          <div className="overview-container">
              <section>
                  <h1 className="data-head">US</h1>
                  <h2 className="data-head">
                      as of <span>{date}</span>.
                  </h2>
                  <div className="data-cd">
                      <div>
                          <h3>cases</h3>
                          <p>{usData.actuals.cases.toLocaleString()}</p>
                      </div>
                      <div>
                          <h3>deaths</h3>
                          <p>{usData.actuals.deaths.toLocaleString()}</p>
                      </div>
                  </div>
                  <div className="slider">
                      <img src="../img/time-slider.png" alt="time slider" />
                  </div>
              </section>
              <section id="US">
                  <Map
                      covidData={props.covidData}
                      user={props.user}
                      lastUpdatedDate={lastUpdatedDate}
                      date={date}
                  />
              </section>
          </div>
          <img src="../img/scale.png" alt="scale" />
      </div>
  );
}
