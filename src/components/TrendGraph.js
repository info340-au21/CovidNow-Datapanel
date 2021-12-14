import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function CasesGraph(props) {
    let timeSeries = props.data;
    let type = props.type;
    let parsedData = timeSeries.map((day) => {
        return { x: day.date, y: day[type] };
    });

    return (
        <Line
            data={{
                datasets: [
                    {
                        data: parsedData,
                        borderColor: "rgba(255,0,0,0.8)",
                        borderWidth: 1,
                        fill: {
                            target: "origin",
                            above: "rgba(255,0,0,0.3)",
                            below: "rgba(255,0,0,0.3)",
                        },
                    },
                ],
            }}
            options={{
                hover: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false,
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 5,
                        backgroundColor: "white",
                    },
                },
                scales: {
                    x: {
                        type: "time",
                        text: "date",
                        time: {
                            unit: "quarter",
                        },
                    },
                    y: {
                        text: `${props.title}`,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: "nearest",
                        axis: "x",
                        intersect: false,
                        callbacks: {
                            beforeLabel: function () {
                                let label = `${props.title}:`;
                                return label;
                            },
                        },
                    },
                },
            }}
        />
    );
}
