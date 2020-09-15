import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function Chart2(props) {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: "Glucose",
        data: props.data,
        backgroundColor: "red",
      },
    ],
    options: {
      title: {
        display: true,
        text: "Glucose level",
      },
    },
  };
  
  return (
    <div className="chart">
      <Line data={chartData} options={{}} />
    </div>
  );
}

export default Chart2;
