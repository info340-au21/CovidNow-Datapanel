import React from "react";
import Map from "./Map";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export function Overview(props) {
    let usData = props.usData;

    // let date = usData.lastUpdatedDate;
    let lastUpdatedDate = usData.lastUpdatedDate;
    let [date, setDate] = useState("2020-03-01");
    // let date = "2020-03-01"

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
                    <div className="slider-container">
                        <h3>select date</h3>
                        <StyledEngineProvider injectFirst>
                            <Slider
                                className="slider"
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                            />
                        </StyledEngineProvider>
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
            <img src="../img/scale.svg" alt="scale" />
        </div>
    );
}
