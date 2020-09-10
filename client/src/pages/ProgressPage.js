import React from "react";
import BloodSugarCard from "../components/BloodSugarCard";
import ChartCard from "../components/ChartCard";
import { LBSSymptomsCard, HBSSymptomsCard } from "../components/SymptomsCard";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/LowLevelCard";
import NormalLevelCard from "../components/NormalLevelCard";
import ComplicationsCard from "../components/ComplicationsCard"

function ProgressPage(props) {
  return (
    <CardGrid>
      <BloodSugarCard />
      <ChartCard />
      <LowLevelCard />
      <NormalLevelCard />
      <LBSSymptomsCard />
      <HBSSymptomsCard />
      <ComplicationsCard />
    </CardGrid>
  );
}

export default ProgressPage;
