import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export function CasesGraph(props) {
    let data = props.data;
    console.log(data);

    var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    return (
        <Line
            data={{
                labels: xValues,
                datasets: [
                    {
                        data: [
                            860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830,
                            2478,
                        ],
                        borderColor: "red",
                        fill: false,
                        tension: 0.5,
                    },
                ],
            }}
            options={{
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }}
        />
    );
}
