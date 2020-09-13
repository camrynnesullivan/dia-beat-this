import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["8:00", "10:00", "12:00", "15:00", "17:00", "22:00"],
        datasets: [
          {
            label: "GlucoseLevelBeforefood",
            data: [90, 98, 100, 98, 115, 105],
            backgroundColor: "pink",
          },
          {
            label: "GlucoseLevelAfterFood",
            data: [150, 180, 160, 140, 155, 125],
            backgroundColor: "red",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Glucose level",
        },
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Line data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default Chart;
