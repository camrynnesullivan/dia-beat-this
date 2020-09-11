import React from "react";
import BloodSugarCard from "../components/BloodSugarCard";
//import ChartCard from "../components/ChartComponents/ChartCard";
import {
  LBSSymptomsCard,
  HBSSymptomsCard,
} from "../components/SymptomsComponents/SymptomsCard";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/WarningsComponents/LowLevelCard";
import HighLevelCard from "../components/WarningsComponents/HighLevelCard";
import NormalLevelCard from "../components/WarningsComponents/NormalLevelCard";
import ComplicationsCard from "../components/ComplicationsCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import Sources from "../components/Sources";

function ProgressPage(props) {
  return (
    <CardGrid>
      <BloodSugarCard />
      <FoodTrackCard />
      {/* <ChartCard /> */}
      {/* if enteredGluc is lower then lowLevels,then render */}
      <LowLevelCard />
      {/* else if enteredGluc is higher than high levels, render */}
      <HighLevelCard />
      <NormalLevelCard />
      <LBSSymptomsCard />
      <HBSSymptomsCard />
      <ComplicationsCard />
      <CareScheduleAccordion />
      <Sources />
    </CardGrid>
  );
}

export default ProgressPage;
