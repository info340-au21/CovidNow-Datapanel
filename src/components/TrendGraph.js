import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns";
import { line } from "d3";

export default function CasesGraph(props) {
    let timeSeries = props.data;
    let type = props.type;
    console.log(timeSeries);
    let parsedData = timeSeries.map((day) => {
        return { x: day.date, y: day[type] };
    });

    // let parsedData = timeSeries.map((day) => {
    //     let date = day.date.split("-");
    //     console.log(date);
    //     return { x: new Date(date[0], date[1], date[2]), y: day.newCases };
    // });


    return (
        <Line
            data={{
                datasets: [
                    {
                        data: parsedData,
                        borderColor: "rgba(255,0,0,0.8)",
                        borderWidth: 2,
                        fill: false,
                        // tension: 0.5,
                    },
                ],
            }}
            options={{
                elements: {
                    point: {
                        radius: 0,
                        backgroundColor: "white",
                    },
                },
                scales: {
                    x: {
                        type: "time",
                        text: "date",
                        time: {
                            unit: "quarter",
                        }
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
