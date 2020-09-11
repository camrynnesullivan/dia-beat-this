import React from "react";
import useChartConfig from "../../components/hooks/useChartConfig";
import { Chart } from "react-charts";
let sourceCode;

export default () => {
  const { data, randomizeData } = useChartConfig({
    series: 10,
  });
  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "time" },
      { position: "left", type: "linear", stacked: true },
    ],
    []
  );
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />

      <Chart data={data} series={series} axes={axes} tooltip />

      <br />
    </>
  );
};
