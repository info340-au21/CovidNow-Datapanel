import React from "react";
import { useHistory, useParams } from 'react-router';
import CreateSVG from "./CreateSVG";
import CasesGraph from "./CasesGraph";

export function Dashboard() {

    let history = useHistory();
    let state = {cases: " ", deaths: " ", state: "", geo: {}};
    let date = new Date();

    if (useParams().params !== "last") {
        state = history.location.state.stateData;
        date = new Date(state.date);
        localStorage.setItem("state", JSON.stringify(state));
    } else {
        state = JSON.parse(localStorage.getItem("state"));
        if ("state" === null) {
            return (
                <div className="dashboard">
                    <span>No History Exists</span>
                </div>
            )
        }
        date = new Date(state.date);
    }

    return (
        <div className="dashboard">
            <div className={"dashboard-container"}>
                <section>
                    <h1 className="data-head">{state.name}</h1>
                    <h2 className="data-head">
                        as of <span>{date.toLocaleDateString()}</span>.
                    </h2>
                    <div className="data-cd">
                        <div>
                        <h3>cases</h3>
                        <p>{state.cases.toLocaleString()}</p>
                        </div>
                        <div>
                        <h3>deaths</h3>
                        <p>{state.deaths.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="slider">
                        <img src="../img/time-slider.png" alt="time slider" />
                    </div>
                </section>
                <CreateSVG cases={state.cases} geoJson={state.geo} />
            </div>
            <div className="widget">
                <h2>Cases Trend</h2>
                <CasesGraph data={state}/>
            </div>
        </div>
    );
}
