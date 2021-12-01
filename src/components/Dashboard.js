import React from "react";
import { Stats } from "./Stats";
import { CasesGraph } from "./CasesGraph";

function Widgets(props) {
    const CaseDeathURL = `https://data.cdc.gov/resource/9mfq-cb36.json`;
    let data = [];

    fetch(CaseDeathURL + `?state=${props.state}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            data = res;
            data.forEach((oneDay) => {
                oneDay.submission_date = oneDay.submission_date.substr(0, 10);
            });
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
    });

    function Widget(props) {
        return (
            <div className="widget">
                <h2>{props.title}</h2>
                {
                    props.type === "case" && <CasesGraph data={ data }/>
                }
            </div>
        );
    }

    return (
        <div>
            <Widget type="case" title="Cases Trend" />
        </div>
    );
}

export function Dashboard(props) {
    let data = props.data.WA;

    return (
        <div className="dashboard">
            <Stats type="dashboard" state={data} />
            <Widgets state="WA" />
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
