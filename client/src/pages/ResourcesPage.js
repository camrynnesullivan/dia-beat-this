import React from "react";
import CardGrid from "../components/CardGrid";
import NormalLevelCard from "../components/WarningComponents/NormalLevelCard";
import ComplicationsCarousel from "../components/Complications/ComplicationsCarousel";
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
