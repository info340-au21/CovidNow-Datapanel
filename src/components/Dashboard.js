import React from "react";
import { Stats } from "./Stats";

export function Dashboard(props) {
    let data = props.data.WA;

    return (
        <div className="dashboard">
            <Stats type="dashboard" state={data} />
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