import React from "react";
import Map from "./Map";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export function Overview(props) {
    let usData = props.usData;

    // let date = usData.lastUpdatedDate;
    let lastUpdatedDate = usData.lastUpdatedDate;
    let [date, setDate] = useState("2021-12-12");
    // let date = "2021-12-12";

    let min = new Date("2020-03-01").getTime();
    let max = new Date().getTime() - 86400000;
    useEffect(() => {
        setDate(lastUpdatedDate);
    }, [lastUpdatedDate]);

    function handleChange(event, newValue) {
        setDate(new Date(newValue).toISOString().slice(0, 10));
    }

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
                                    min={min}
                                    max={max}
                                    defaultValue={max}
                                    className="slider"
                                    step={86400000}
                                    aria-label="Default"
                                    valueLabelDisplay="auto"
                                    onChange={handleChange}
                                    valueLabelFormat={(value) => {
                                        return new Date(value)
                                            .toISOString()
                                            .slice(0, 10);
                                    }}
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
