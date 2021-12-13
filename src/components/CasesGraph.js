import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function CasesGraph(props) {
    let timeSeries = props.data;
    let parsedData = timeSeries.map((day) => {
        return {x: day.date, y: day.cases};
    })
    console.log(parsedData);

    var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    return (
        <Line
            data={{
                datasets: [
                    {
                        data: parsedData,
                        borderColor: "red",
                        fill: false,
                        tension: 0.5,
                    },
                ],
            }}
            // options={{
            //     scales: {
            //         x: {
            //             type: "timeseries",
            //             time: {
            //                 unit: "month"
            //             }
            //         },
            //     },
            //     plugins: {
            //         legend: {
            //             display: false,
            //         },
            //     },
            // }}
        />
    );
}
