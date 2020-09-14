import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function ChartAC1(props) {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: "AC1",
        data: props.data,
        backgroundColor: "orange",
      },
    ],
    options: {
      title: {
        display: true,
        text: "AC1 level",
      },
    },
  };
  console.log(props.labels);
  console.log(props.data);
  return (
    <div className="chart">
      <Line data={chartData} options={{}} />
    </div>
  );
}

export default ChartAC1;
