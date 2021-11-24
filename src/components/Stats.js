import React from "react";

export function Stats(props) {
    let state = props.state;
    return (
        <div className={props.type + "-container"}>
            <section>
                <h1 className="data-head">{state.name}</h1>
                <h2 className="data-head">
                    as of <span>{state.date}</span>.
                </h2>
                <div className="data-cd">
                    <div>
                    <h3>cases</h3>
                    <p>{state.cases}</p>
                    </div>
                    <div>
                    <h3>deaths</h3>
                    <p>{state.deaths}</p>
                    </div>
                </div>
                <div className="slider">
                    <img src="./img/time-slider.png" alt="time slider" />
                </div>
            </section>
            <section>
                <img className={state.state.toLowerCase() + "-map"} src={"./img/" + state.state + ".svg"} alt={state.state + " Map"} />
            </section>
        </div>
    );
}