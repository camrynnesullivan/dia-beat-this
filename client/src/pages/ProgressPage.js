import React from "react";
import BloodSugarCard from "../components/BloodSugarCard";
import ChartCard from "../components/ChartCard";
// import SymptomsCard from "../components/SymptomsCard";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/LowLevelCard";
import NormalLevelCard from "../components/NormalLevelCard";
function ProgressPage(props) {
  return (
    <CardGrid>
      <BloodSugarCard />
      <ChartCard />
      <LowLevelCard />
      <NormalLevelCard />
      {/* <SymptomsCard /> */}
    </CardGrid>
  );
}

export default ProgressPage;
