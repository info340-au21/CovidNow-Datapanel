import React from "react";
import { NavLink } from 'react-router-dom';

export function Overview(props) {

  let data = props.data;
  
  return (
    <div className="overview">
      <div className="overview-container">
        <section>
          <h1 className="data-head">US Overview</h1>
          <h2 className="data-head">
            as of <span>April 13</span>.
          </h2>
          <div className="data-cd">
            <div>
              <h3>cases</h3>
              <p>{data.cases}</p>
            </div>
            <div>
              <h3>deaths</h3>
              <p>{data.deaths}</p>
            </div>
          </div>
          <div className="slider">
            <img src="./img/time-slider.png" alt="time slider" />
          </div>
        </section>
        <section>
          <NavLink className="nav-link" to="/dashboard">
            <img className="us-map" src="./img/us.svg" alt="US Map" />
          </NavLink>
        </section>
      </div>
      <img src="./img/scale.png" alt="scale" />
    </div>
  );
}
