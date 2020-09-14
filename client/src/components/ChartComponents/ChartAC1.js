import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function ChartAC1(props) {
  const [data, setData] = useState({
    chartData: {
      labels: ["8:00", "10:00", "12:00", "15:00", "17:00", "22:00"],
      datasets: [
        {
          label: "AC1",
          data: [6, 6.7, 7, 9, 6.2, 7],
          backgroundColor: "orange",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "AC1 level",
      },
    },
  });
  return (
    <div className="chart">
      <Line data={data.chartData} options={{}} />
    </div>
  );
}

export default ChartAC1;
