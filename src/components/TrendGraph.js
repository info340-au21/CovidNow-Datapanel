import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function CasesGraph(props) {
    let timeSeries = props.data;
    let type = props.type;
    console.log(timeSeries);
    let parsedData = timeSeries.map((day) => {
        return { x: day.date, y: day[type] };
    });
    console.log(parsedData);

    // let parsedData = timeSeries.map((day) => {
    //     let date = day.date.split("-");
    //     console.log(date);
    //     return { x: new Date(date[0], date[1], date[2]), y: day.newCases };
    // });

    var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    return (
        <Line
            data={{
                datasets: [
                    {
                        data: parsedData,
                        borderColor: "red",
                        borderWidth: 2,
                        fill: false,
                        // tension: 0.5,
                    },
                ],
            }}
            options={{
                scales: {
                    x: {
                        type: "time",
                        text: "date",
                    },
                    y: {
                        text: `${type}`,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            beforeLabel: function () {
                                let label = `${type }:`;
                                return label;
                            },
                        },
                    },
                },
            }}
        />
    );
}
