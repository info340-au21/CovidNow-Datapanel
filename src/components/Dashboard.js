import React from "react";
//import { mapControlDefaultProps } from "react-map-gl/src/components/use-map-control";
import { useHistory, useParams } from "react-router";
import CreateSVG from "./CreateSVG";
import TrendGraph from "./TrendGraph";
import { getDatabase, ref, onValue } from "firebase/database";

export function Dashboard(props) {
    const db = getDatabase();
    let history = useHistory();
    let state = { cases: " ", deaths: " ", state: "", date: "", geo: {} };
    let timeSeries;
    let date = "";
    const lastInfo = useParams().params;
    if (props.user) {
        console.log("User is logged in!");
        const userData = ref(db, "DefaultState" + props.user.uid);

        onValue(userData, (snapshot) => {
            state = snapshot.child("state").val();
        });
    } else {
        console.log("User is not logged in!");
        if (lastInfo !== "last") {
            state = history.location.state.stateData;
            timeSeries = history.location.state.timeSeries;
            date = state.date;
            localStorage.setItem("state", JSON.stringify(state));
        } else {
            state = JSON.parse(localStorage.getItem("state"));
            if ("state" === null) {
                return (
                    <div className="dashboard">
                        <span>No History Exists</span>
                    </div>
                );
            }
            date = state.date;
        }
    }
    console.log(state);
    return (
        <div className="dashboard">
            <div className={"dashboard-container"}>
                <section>
                    <h1 className="data-head">{state.name}</h1>
                    <h2 className="data-head">
                        as of <span>{state.date}</span>.
                    </h2>
                    <div className="data-cd">
                        <div>
                            <h3>cases</h3>
                            <p>
                                {state.cases
                                    ? state.cases.toLocaleString()
                                    : "no data"}
                            </p>
                        </div>
                        <div>
                            <h3>deaths</h3>
                            <p>
                                {state.deaths
                                    ? state.deaths.toLocaleString()
                                    : "no data"}
                            </p>
                        </div>
                    </div>
                    <div className="slider">
                        <img src="../img/time-slider.png" alt="time slider" />
                    </div>
                </section>
                <CreateSVG data={state} />
            </div>
            <div className="widget">
                <h2>Total Cases Trend</h2>
                <TrendGraph data={timeSeries} type="cases" title="Cases"/>
            </div>
            <div className="widget">
                <h2>New Cases Trend</h2>
                <TrendGraph data={timeSeries} type="newCases" title="New Cases"/>
            </div>
            <div className="widget">
                <h2>Total Deaths Trend</h2>
                <TrendGraph data={timeSeries} type="deaths" title="Deaths"/>
            </div>
            <div className="widget">
                <h2>New Deaths Trend</h2>
                <TrendGraph data={timeSeries} type="newDeaths" title="New Deaths"/>
            </div>
        </div>
    );
}
