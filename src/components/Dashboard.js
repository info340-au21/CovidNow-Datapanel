import React from "react";
//import { mapControlDefaultProps } from "react-map-gl/src/components/use-map-control";
import { useHistory, useParams } from "react-router";
import CreateSVG from "./CreateSVG";
import { getDatabase, ref, onValue } from "firebase/database";

export function Dashboard(props) {
  const db = getDatabase();
  let history = useHistory();
  let state = { cases: " ", deaths: " ", state: "", geo: {} };
  let date = new Date();
  const lastInfo = useParams().params;
  if (props.user) {
    console.log("User is logged in!");
    const userData = ref(db, "DefaultState" + props.user.uid);
    
    onValue(userData, (snapshot) => {
        state = snapshot.child("state").val();
    });
    date = new Date(state.date);
  }
  else {
    console.log("User is not logged in!");
    if (lastInfo !== "last") {
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
          );
        }
        date = new Date(state.date);
      }
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
      <img
        className="trend d-sm-none"
        src="../img/trend-mobile.svg"
        alt="Cases Trend Mobile"
      />
      <img
        className="trend d-none d-sm-block"
        src="../img/trend.svg"
        alt="Cases Trend"
      />
      <img className="rate" src="../img/rate.svg" alt="Vaccination Rate" />
    </div>
  );
}
