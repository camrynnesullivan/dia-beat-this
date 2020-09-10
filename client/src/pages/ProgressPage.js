import React from "react";
import BloodSugarCard from "../components/BloodSugarCard";
import ChartCard from "../components/ChartCard";
import { LBSSymptomsCard, HBSSymptomsCard } from "../components/SymptomsCard";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/LowLevelCard";
import HighLevelCard from "../components/HighLevelCard";
import NormalLevelCard from "../components/NormalLevelCard";
import ComplicationsCard from "../components/ComplicationsCard";
import CareScheduleAccordion from "../components/CareSchedule";

function ProgressPage(props) {
  return (
    <CardGrid>
      <BloodSugarCard />
      <ChartCard />
      {/* if enteredGluc is lower then lowLevels,then render */}
      <LowLevelCard />
      {/* else if enteredGluc is higher than high levels, render */}
      <HighLevelCard />
      <NormalLevelCard />
      <LBSSymptomsCard />
      <HBSSymptomsCard />
      <ComplicationsCard />
      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
