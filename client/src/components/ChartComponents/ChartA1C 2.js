import React, { useState } from "react";
import { Line } from "react-chartjs-2";
function ChartA1C(props) {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: "A1C",
        data: props.data,
        backgroundColor: "orange",
      },
    ],
    options: {
      title: {
        display: true,
        text: "A1C level",
      },
    },
  };
  return (
    <div className="chart">
      <Line data={chartData} options={{}} />
    </div>
  );
}
export default ChartA1C;
