import React from "react";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/WarningsComponents/LowLevelCard";
import HighLevelCard from "../components/WarningsComponents/HighLevelCard";
import NormalLevelCard from "../components/WarningsComponents/NormalLevelCard";
import ComplicationsCard from "../components/ComplicationsCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import Sources from "../components/Sources"

function ResourcesPage(props) {
  return (
    <CardGrid>
      <NormalLevelCard />
      <ComplicationsCard />
      <Sources />
    </CardGrid>
  );
}

export default ResourcesPage;
