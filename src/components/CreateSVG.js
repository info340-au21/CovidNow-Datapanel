import React from "react";
import * as d3 from 'd3';


export default function CreateSVG(props) {

    var cases = props.data.cases;
    var geo = props.data.geo;
    console.log(props.data);
    var geoJson = JSON.parse(geo);
    const width = 382
    const height = 284
    let color = '#EFEFEF'
    cases = props.data.cases;

    if (between(cases, 150000, 250000)) {
        color = '#EEBBB7';
    } else if (between(cases, 250000, 500000)) {
        color = '#EE857D'
    } else if (between(cases, 500000, 875000)) {
        color = '#EC5043'
    } else if (between(cases, 875000, Infinity)) {
        color = '#EB1B0A'
    }

    const projection = d3.geoAlbers().fitSize([width, height], geoJson)
    const path = d3.geoPath().projection(projection)

    return (
        <section id="state">
            <svg id="stateSVG" width={width} height={height} fill={color}>
                <path d={path(geoJson)} />
            </svg>
        </section>
    );
}

function between(x, min, max) {
    return x >= min && x < max;
}