import * as React from "react";
import { useState, useCallback } from "react";
import { useHistory } from "react-router";
import MapGL, { Source, Layer } from "react-map-gl";
import { updateData } from "./utils";
import states from "../data/us-states.json";

const MAPBOX_TOKEN =
    "pk.eyJ1Ijoicmtva2EiLCJhIjoiY2t3bG01eHR5MjM1NzJvbXA3MzJzd2hoZiJ9.YAGNzuhJcaNl-0LkKI_ARw";

export default function Map(props) {
    let covidData = props.covidData;
    let date = "2021-12-11";
    console.log(covidData);
    function geoJson(covidData) {
        console.log(props.lastUpdatedDate);
        console.log(date === props.lastUpdatedDate);
        if (covidData.withData && date !== props.lastUpdatedDate) {
            const { features } = covidData;
            return {
                type: "FeatureCollection",
                features: features.map((f) => {
                    if (f.data) {
                        let dataOnSpecificDate = f.data.filter(
                            (singleDayData) => singleDayData.date === date
                        )[0];
                        if (dataOnSpecificDate) {
                            let cases = dataOnSpecificDate.cases;
                            let deaths = dataOnSpecificDate.deaths;
                            const properties = {
                                ...f.properties,
                                cases,
                                deaths,
                            };
                            return { ...f, properties };
                        }
                    }
                }),
            };
        } else {
            return covidData;
        }
    };

    const [hoverInfo, setHoverInfo] = useState(null);

    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -100,
        zoom: 3,
        bearing: 0,
        pitch: 0,
    });

    // updateData(states, json);

    const dataLayer = {
        id: "data",
        type: "fill",
        paint: {
            "fill-color": {
                property: "cases",
                stops: [
                    [100000, "#EFEFEF"],
                    [250000, "#EEBBB7"],
                    [500000, "#EE857D"],
                    [750000, "#EC5043"],
                    [1000000, "#EB1B0A"],
                ],
            },
            "fill-outline-color": "#000000",
        },
    };

    const onHover = useCallback((event) => {
        const {
            features,
            offsetCenter: { x, y },
        } = event;
        const hoveredFeature = features && features[0];

        setHoverInfo(
            hoveredFeature
                ? {
                      feature: hoveredFeature,
                      x: x,
                      y: y,
                  }
                : null
        );
    }, []);

    let history = useHistory();

    const onClick = useCallback(
        (event) => {
            const { features } = event;
            const clickedFeature = features && features[0];
            console.log(event);
            if (clickedFeature && !clickedFeature.properties.class) {
                history.push("/dashboard/" + clickedFeature.properties.state, {
                    stateData: clickedFeature.properties,
                });
            }
        },
        [history]
    );

    return (
        <MapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onHover={onHover}
            onClick={onClick}>
            <Source type="geojson" data={geoJson(covidData)}>
                <Layer {...dataLayer} />
            </Source>
            {hoverInfo && (
                <div
                    className="hoverStat"
                    style={{ left: hoverInfo.x, top: hoverInfo.y }}>
                    <div>State: {hoverInfo.feature.properties.name}</div>
                    <div>Cases: {hoverInfo.feature.properties.cases}</div>
                    <div>Deaths: {hoverInfo.feature.properties.deaths}</div>
                </div>
            )}
        </MapGL>
    );
}
