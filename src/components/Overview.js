import React from "react";

export function Overview() {
  return (
    <div className="overview collapse show multi-collapse" id="collapseOverview">
      <div className="overview-container">
        <section>
          <h1 className="data-head">US Overview</h1>
          <h2 className="data-head">
            as of <span>April 13</span>.
          </h2>
          <div className="data-cd">
            <div>
              <h3>cases</h3>
              <p>71,831</p>
            </div>
            <div>
              <h3>deaths</h3>
              <p>6,798</p>
            </div>
          </div>
          <div className="slider">
            <img src="./img/time-slider.png" alt="time slider" />
          </div>
        </section>
        <section>
          <a
            className="nav-link"
            data-toggle="collapse"
            data-target=".multi-collapse"
            href="#collapseDashboard"
            role="button"
            aria-expanded="false"
            aria-controls=".multi-collapse">
            <img className="us-map" src="./img/us.svg" alt="US Map" />
          </a>
        </section>
      </div>
      <img src="./img/scale.png" alt="scale" />
    </div>
  );
}
