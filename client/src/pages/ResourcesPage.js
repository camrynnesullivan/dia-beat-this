import React from "react";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/WarningsComponents/LowLevelCard";
import HighLevelCard from "../components/WarningsComponents/HighLevelCard";
import NormalLevelCard from "../components/WarningsComponents/NormalLevelCard";
import ComplicationsCarousel from "../components/Complications/ComplicationsCarousel";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import Sources from "../components/Sources"

function ResourcesPage(props) {
  return (
    <CardGrid>
      <NormalLevelCard />
      <ComplicationsCarousel />
      <Sources />
    </CardGrid>
  );
}

export default ResourcesPage;
