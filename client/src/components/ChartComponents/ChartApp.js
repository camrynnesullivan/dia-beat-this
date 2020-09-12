import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class ChartApp extends Component {
  constructor(props) {
    super(),
      (this.state = {
        data: {
          labels: ["1", "2", "3", "4"],
          datasets: [
            {
              label: "Videos Mades",
              backgroundColor: "rgba(255, 0, 255 ,0.75)",
              data: [4, 5, 1, 10, 32, 2, 12],
            },
            {
              label: "Subscriptions",
              backgroundColor: "rgba(0,255,0,0.75)",
              data: [10, 11, 14, 2, 16, 13],
            },
          ],
        },
      });
  }
  render() {
    return (
      <div style={{ position: "relative", width: 600, height: 550 }}>
        <h3>Chart Sample</h3>
        <Line
          options={{
            responsive: true,
          }}
          data={this.state.data}
        />
      </div>
    );
  }
}
