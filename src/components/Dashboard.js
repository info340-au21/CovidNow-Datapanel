import React from "react";

export function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <section>
                    <h1 className="data-head">Washington</h1>
                    <h2 className="data-head">as of <span>April 13</span>.</h2>
                    <div className="data-cd">
                        <div>
                            <h3>cases</h3>
                            <p>1,831</p>
                        </div>
                        <div>
                            <h3>deaths</h3>
                            <p>798</p>
                        </div>
                    </div>
                    <div className="slider">
                        <img
                            src="./img/time-slider.png"
                            alt="time slider"
                        />
                    </div>
                </section>
                <section>
                    <img className="wa-map" src="./img/WA.svg" alt="WA Map" />
                </section>
            </div>
            <img
                    className="trend d-sm-none"
                    src="./img/trend-mobile.svg"
                    alt="Cases Trend Mobile"
                />
            <img
                    className="trend d-none d-sm-block"
                    src="./img/trend.svg"
                    alt="Cases Trend"
                />
            <img className="rate" src="./img/rate.svg" alt="Vaccination Rate" />
        </div>
                
    );
}